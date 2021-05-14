const scrape = require('website-scraper');

scrape({
    urls: ['https://google.com'],
    directory: 'C:/location',
    sources: [
        { selector: 'img', attr: 'src' },
        { selector: 'link[rel="stylesheet"]', attr: 'href' },
        { selector: 'script', attr: 'src' }
    ]
});