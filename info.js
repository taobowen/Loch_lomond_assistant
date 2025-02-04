import puppeteer from 'puppeteer';

class Info {
    constructor({ headless = true, viewport = { width: 1920, height: 1080 } } = {}) {
        this.headless = headless;
        this.viewport = viewport;
    }

    async _getScreenshot(url, targets) {
        const browser = await puppeteer.launch({ headless: this.headless });
        const page = await browser.newPage();

        await page.setViewport(this.viewport);

        try {
            await page.goto(url, { waitUntil: 'networkidle2' });

            const cookieBarExists = await page.evaluate(() => {
                const cookieBar = document.querySelector('[data-testid="cookie-bar"]');
                return cookieBar !== null;
            });

            if (cookieBarExists) {
                console.log('Cookie bar found, hiding it...');
                await page.evaluate(() => {
                    const cookieBar = document.querySelector('[data-testid="cookie-bar"]');
                    if (cookieBar) {
                        cookieBar.style.display = 'none';
                    }
                });
            } else {
                console.log('No cookie bar found on this page.');
            }

            await Promise.all(targets.map(async ({ elementId, fileName }) => {
                try {
                    await page.waitForSelector(elementId, { visible: true, timeout: 10000 });

                    const element = await page.$(elementId);
                    if (!element) {
                        console.log(`Element with selector ${elementId} not found.`);
                        return;
                    }

                    const boundingBox = await element.boundingBox();
                    if (!boundingBox) {
                        console.log(`Element with selector ${elementId} has no bounding box.`);
                        return;
                    }

                    await page.screenshot({
                        path: fileName,
                        clip: {
                            x: boundingBox.x,
                            y: boundingBox.y,
                            width: boundingBox.width,
                            height: boundingBox.height
                        }
                    });

                    console.log(`Screenshot captured for ${fileName}!`);
                } catch (error) {
                    console.error(`Error capturing screenshot for ${fileName}:`, error);
                }
            }));
        } catch (error) {
            console.error(`Error navigating to ${url}:`, error);
        } finally {
            await browser.close();
        }
    }

    async start() {
        await this._getScreenshot('https://www.lochlomond.ca/conditions/', [{ elementId: '.vc_row.wpb_row.vc_row-fluid.vc_column-gap-35', fileName: 'conditions.png' }]);

        await this._getScreenshot('https://www.theweathernetwork.com/en/ski/ca/ontario/loch-lomond-ski-area/current', [
            { elementId: '#weather-obs', fileName: 'weather.png' },
            { elementId: '#hourly-forecast', fileName: 'forecast.png' },
            { elementId: '#detailed-obs', fileName: 'detailed.png' },
            { elementId: '#poi-component', fileName: 'poi.png' }
        ]);

        console.log('Screenshots captured!');
    }
}

export default Info;