import React from 'react'

export const features = [{
    title: 'Clear Instructions',
    description: (
        <>
            We at hackers hub provide <strong>exact</strong> and <strong>clear</strong> instructions to our students so that they can perform well and learn hacking without any haste.
        </>
    ),
}, {
    title: 'Wide Resources',
    description: (
        <>
            Hackers Hub provides you with  <a href="https://hackers-hub.com/courses/"><strong>Courses</strong></a> for
            clear concept testing as well as <a href="https://hackers-hub.com/shop/"><strong>Books</strong></a> for
            self instruction and revision along with <a href="https://hackers-hub.com/blog"><strong>Hacking Articles</strong></a>.
        </>
    ),
},
{
    title: '24*7 Support',
    description: (
        <>
            Hacking is not a one day journey and during this journey you will face lots of problems. 
            But you don't have to be worry about it because we are always here to help you.
        </>
    ),
}]

export const logos = [{
/**
 * Page 1
 */
    img: 'google.png',
    alt: 'Google',
    url: 'https://developers.google.com/blockly/'
}, {
    img: 'netflix.png',
    alt: 'Netflix',
    url: 'https://netflix.com/'
}, {
    img: 'microsoft.svg',
    alt: 'Microsoft',
    url: 'https://www.microsoft.com/'
}, {
    img: 'mozilla.png',
    alt: 'Mozilla',
    url: 'https://www.mozilla.org/'
}, {
    img: 'buoyant.png',
    alt: 'Buoyant',
    url: 'https://buoyant.io/'
}, {
    img: 'sap.png',
    alt: 'SAP',
    url: 'https://www.sap.com/'
},
/**
 * Page 2
 */
{
    img: 'hilton.png',
    alt: 'Hilton',
    url: 'https://www.hilton.com/'
}, {
    img: 'schwab.png',
    alt: 'Charles Schwab',
    url: 'https://www.schwab.com/'
}, {
    img: 'jwplayer.png',
    alt: 'JW Player',
    url: 'https://www.jwplayer.com/'
}, {
    img: 'bbva.png',
    alt: 'BBVA',
    url: 'https://www.bbva.com/'
}, {
    img: 'gopro.png',
    alt: 'GoPro',
    url: 'https://gopro.com/'
}, {
    img: 'algolia.png',
    alt: 'Algolia',
    url: 'https://www.algolia.com/'
},
/**
 * Page 3
 */
{
    img: 'financialtimes.png',
    alt: 'Financial Times',
    url: 'https://www.ft.com/'
}, {
    img: 'zendesk.png',
    alt: 'Zendesk',
    url: 'https://www.zendesk.com/'
}, {
    img: '1und1.png',
    alt: '1&1',
    url: 'https://www.1und1.de/'
}, {
    img: 'avira.png',
    alt: 'Avira',
    url: 'https://www.avira.com/'
}, {
    img: 'deloitte.jpg',
    alt: 'Deloitte',
    url: 'https://deloitte.com'
}, {
    img: 'rabobank.png',
    alt: 'Rabobank',
    url: 'https://www.rabobank.com/'
},
/**
 * Page 4
 */
{
    img: 'bedrock.jpg',
    alt: 'Bedrock Streaming',
    url: 'https://www.bedrockstreaming.com/'
}]

export const LHIntregrationExample = `
await browser.emulateDevice('iPhone X')
await browser.enablePerformanceAudits({
    networkThrottling: 'Good 3G',
    cacheEnabled: true,
    formFactor: 'mobile'
})

// open application under test
await browser.url('https://localhost:3000')

expect(await browser.getMetrics().firstMeaningfulPaint)
    .toBeBelow(2500)

const pwaCheckResult = await browser.checkPWA()
expect(pwaCheckResult.passed).toBe(true)
`

export const SetupExample = `
$ npm install --save-dev @wdio/cli
$ npx wdio config --yes
$ npx wdio run
`

export const ReactIntegration = `
await browser.url('https://ahfarmer.github.io/calculator/');
const appWrapper = await browser.$('div#root')

await browser.react$('t', {
    props: { name: '7' }
}).click()
await browser.react$('t', {
    props: { name: 'x' }
}).click()
await browser.react$('t', {
    props: { name: '6' }
}).click()
await browser.react$('t', {
    props: { name: '=' }
}).click()

// prints "42"
console.log(await $('.component-display').getText());`
