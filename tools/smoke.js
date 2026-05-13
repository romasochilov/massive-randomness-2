// Playwright smoke test for Massive Randomness 2.
// Usage:
//   python3 -m http.server 4173          # in one terminal
//   node tools/smoke.js [LANG] [URL] [N] # in another (LANG default RU, URL default http://127.0.0.1:4173, N default 60)
//
// Exits non-zero on any JS error or blank mission card.

const { chromium } = require('playwright');

const LANG = process.argv[2] || 'RU';
const URL = process.argv[3] || 'http://127.0.0.1:4173/index.html';
const N = parseInt(process.argv[4] || '60', 10);

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1280, height: 1200 } });
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));
    page.on('console', msg => { if (msg.type() === 'error') pageErrors.push('console.error: ' + msg.text()); });

    await page.addInitScript((lang) => { localStorage.setItem('MARA2_LANG', lang); }, LANG);
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);

    const empties = [];
    for (let i = 0; i < N; i++) {
        await page.evaluate(() => {
            const btn = document.querySelector('.button.newQuest, #newQuestNode');
            if (btn) btn.click();
        });
        await page.waitForTimeout(600);
        const data = await page.evaluate(() => {
            const story = document.querySelector('.story');
            const title = document.querySelector('.title .text');
            const author = document.querySelector('.author');
            return {
                title: (title && title.innerText || '').trim(),
                story: (story && story.innerText || '').trim(),
                author: (author && author.innerText || '').trim(),
            };
        });
        if (!data.story || data.story.length < 5) {
            empties.push({ i, ...data });
        }
    }

    const ignorable = e => /ServiceWorker.*MIME type.*octet-stream/.test(e);
    const realErrors = pageErrors.filter(e => !ignorable(e));

    console.log(`Generated ${N} quests in ${LANG}. Empty: ${empties.length}, Errors: ${realErrors.length}`);
    if (empties.length) {
        console.log('\nFirst 5 empty cards:');
        empties.slice(0, 5).forEach(e => console.log(' -', JSON.stringify(e)));
    }
    if (realErrors.length) {
        console.log('\nUnique errors:');
        [...new Set(realErrors)].forEach(e => console.log(' -', e));
    }

    await browser.close();
    process.exit(empties.length || realErrors.length ? 1 : 0);
})();
