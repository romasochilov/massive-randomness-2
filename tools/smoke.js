// Playwright smoke test for Massive Randomness 2.
// Usage:
//   python3 -m http.server 4173                  # in one terminal
//   node tools/smoke.js [LANG] [URL] [N]         # in another
//
// LANG: target language (default RU)
// URL:  base URL (default http://127.0.0.1:4173)
// N:    number of quest generations to test (default 60)
//
// Exits non-zero on any of:
//  - blank mission cards (renderer error)
//  - missing or empty Generator section in settings
//  - unhandled JS errors in the page

const { chromium } = require('playwright');

const LANG = process.argv[2] || 'RU';
const URL  = process.argv[3] || 'http://127.0.0.1:4173/index.html';
const N    = parseInt(process.argv[4] || '60', 10);

const ignorableError = e => /unsupported MIME type.*octet-stream|ServiceWorker/i.test(e);

async function openSettings(page) {
    await page.evaluate(() => {
        const all = Array.from(document.querySelectorAll('.button'));
        const settings = all.find(b => b.classList.contains('settingsButton'));
        if (settings) settings.click();
    });
    await page.waitForTimeout(600);
}

async function readSections(page) {
    return page.evaluate(() => {
        return Array.from(document.querySelectorAll('.section')).map(s => s.innerText.trim()).filter(t => t);
    });
}

async function countGeneratorEntries(page) {
    return page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('.section'));
        const gen = sections.find(s => /^(Generator|Генератор|Generatore)$/i.test(s.innerText.trim()));
        if (!gen) return -1;
        let sib = gen.nextElementSibling;
        let count = 0;
        while (sib && !sib.classList.contains('section')) {
            if (sib.classList.contains('items')) {
                count += sib.querySelectorAll('.item').length;
            }
            sib = sib.nextElementSibling;
        }
        return count;
    });
}

async function countDifficultyEntries(page) {
    return page.evaluate(() => {
        const sections = Array.from(document.querySelectorAll('.section'));
        const diff = sections.find(s => /^(Difficulty|Сложность|Difficoltà)$/i.test(s.innerText.trim()));
        if (!diff) return -1;
        let sib = diff.nextElementSibling;
        let count = 0;
        while (sib && !sib.classList.contains('section')) {
            if (sib.classList.contains('items')) {
                count += sib.querySelectorAll('.item').length;
            }
            sib = sib.nextElementSibling;
        }
        return count;
    });
}

async function smokeMenu(page) {
    // Default configuration: Hellscape mandatory, no expansions checked.
    await openSettings(page);
    const sections = await readSections(page);
    const generatorEntries = await countGeneratorEntries(page);
    const difficultyEntries = await countDifficultyEntries(page);
    const ok = sections.some(s => /Generator|Генератор|Generatore/i.test(s)) && generatorEntries >= 2 && difficultyEntries >= 3;
    return { ok, sections, generatorEntries, difficultyEntries };
}

async function smokePrint(page) {
    await page.evaluate(() => { window.__printSnapshot = null; window.print = function() { window.__printSnapshot = {
        bodyClass: document.body.querySelector('.body') ? document.body.querySelector('.body').className : '',
        printPageCount: document.querySelectorAll('.printAllPages .printPage').length
    }; }; });
    const btnPresent = await page.evaluate(() => !!document.querySelector('.button.printButton'));
    if (!btnPresent) return { ok: false, reason: 'no print button' };
    await page.evaluate(() => document.querySelector('.button.printButton').click());
    await page.waitForTimeout(600);
    const snap = await page.evaluate(() => window.__printSnapshot);
    return { ok: !!snap, snap };
}

async function smokeQuests(page) {
    // Close settings, go to one-shot, click "new quest" N times, ensure all renders are non-empty.
    await page.evaluate(() => {
        const settings = document.querySelector('.button.settingsButton');
        if (settings && document.querySelector('.settings.open')) settings.click();
    });
    await page.waitForTimeout(400);
    const empties = [];
    for (let i = 0; i < N; i++) {
        await page.evaluate(() => {
            const btn = document.querySelector('.button.newQuest');
            if (btn) btn.click();
        });
        await page.waitForTimeout(600);
        const data = await page.evaluate(() => {
            const story = document.querySelector('.story');
            const title = document.querySelector('.title .text');
            return {
                title: (title && title.innerText || '').trim(),
                story: (story && story.innerText || '').trim()
            };
        });
        if (!data.story || data.story.length < 5) empties.push({ i, ...data });
    }
    return empties;
}

async function smokeDifficultyHash(browser, pageErrors, code, ruleRegex) {
    // Open a fresh page with a difficulty hash (Hard=3, Nightmare=4) and a fixed seed;
    // the difficulty rule block must appear on the rendered sheet.
    const page = await browser.newPage({ viewport: { width: 1280, height: 1200 } });
    page.on('pageerror', err => pageErrors.push(err.message));
    page.on('console', msg => { if (msg.type() === 'error') pageErrors.push('console.error: ' + msg.text()); });
    await page.addInitScript((lang) => { localStorage.setItem('MARA2_LANG', lang); }, LANG);
    await page.goto(URL + '#AUV1Z' + code + '-424242', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    let data = await page.evaluate(() => ({
        story: (document.querySelector('.story') ? document.querySelector('.story').innerText : '').trim(),
        text: document.body.innerText
    }));
    if (!data.story) {
        // Some flows need an explicit generation; settings from the hash persist.
        await page.evaluate(() => {
            const btn = document.querySelector('.button.newQuest');
            if (btn) btn.click();
        });
        await page.waitForTimeout(1500);
        data = await page.evaluate(() => ({
            story: (document.querySelector('.story') ? document.querySelector('.story').innerText : '').trim(),
            text: document.body.innerText
        }));
    }
    await page.close();
    const hasRule = ruleRegex.test(data.text);
    return { ok: !!data.story && hasRule, storyLength: data.story.length, hasRule };
}

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1280, height: 1200 } });
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));
    page.on('console', msg => { if (msg.type() === 'error') pageErrors.push('console.error: ' + msg.text()); });

    await page.addInitScript((lang) => { localStorage.setItem('MARA2_LANG', lang); }, LANG);
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);

    let failed = false;

    // 1. Menu structure check
    const menu = await smokeMenu(page);
    console.log(`[menu] Generator section: ${menu.generatorEntries} entries; Difficulty section: ${menu.difficultyEntries} entries; ok: ${menu.ok ? 'yes' : 'NO'}`);
    if (!menu.ok) failed = true;

    // 2. Print button check (one-shot)
    const printOneShot = await smokePrint(page);
    console.log(`[print] one-shot: ${printOneShot.ok ? 'window.print called' : 'FAILED ('+(printOneShot.reason||'')+')'}`);
    if (!printOneShot.ok) failed = true;

    // 3. Quest generation check
    const empties = await smokeQuests(page);
    console.log(`[quests] Generated ${N} quests in ${LANG}. Empty: ${empties.length}`);
    if (empties.length) {
        console.log('First 5 empty cards:');
        empties.slice(0, 5).forEach(e => console.log(' -', JSON.stringify(e)));
        failed = true;
    }

    // 4. Hard difficulty end-to-end
    const hard = await smokeDifficultyHash(browser, pageErrors, '3', /Hard Mode|Сложный режим|Modalità Difficile/i);
    console.log(`[hard] sheet rendered: ${hard.storyLength > 0 ? 'yes' : 'NO'}; rule block present: ${hard.hasRule ? 'yes' : 'NO'}`);
    if (!hard.ok) failed = true;

    // 5. Nightmare difficulty end-to-end
    const nightmare = await smokeDifficultyHash(browser, pageErrors, '4', /Nightmare Mode|Кошмарный режим|Modalità Incubo/i);
    console.log(`[nightmare] sheet rendered: ${nightmare.storyLength > 0 ? 'yes' : 'NO'}; rule block present: ${nightmare.hasRule ? 'yes' : 'NO'}`);
    if (!nightmare.ok) failed = true;

    // 3. Page errors
    const realErrors = pageErrors.filter(e => !ignorableError(e));
    if (realErrors.length) {
        console.log(`[errors] ${realErrors.length} unhandled. Unique:`);
        [...new Set(realErrors)].forEach(e => console.log(' -', e));
        failed = true;
    } else {
        console.log('[errors] none (ignored Service Worker MIME warning).');
    }

    await browser.close();
    process.exit(failed ? 1 : 0);
})();
