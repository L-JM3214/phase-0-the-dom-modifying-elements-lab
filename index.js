const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';

document.querySelector('main').remove();
document.body.appendChild(newHeader);

const { JSDOM } = require('jsdom');
const { expect } = require('chai');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf-8');
const js = fs.readFileSync('index.js', 'utf-8');
const dom = new JSDOM(html, { runScripts: 'outside-only' });

dom.window.eval(js);

const { document } = dom.window;