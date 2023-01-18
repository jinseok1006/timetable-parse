const cheerio = require('cheerio');
const fs = require('fs/promises');
const path = require('path');
const types = require('./types.js');
const keys = Object.keys(types);

async function parse(src) {
  const xmlFile = await fs.readFile(`${src}.xml`);
  const $ = cheerio.load(xmlFile, { xmlMode: true }, false);

  const data = $('Row')
    .map((i, el) =>
      keys.reduce(
        (pre, key) => ({
          ...pre,
          [types[key].id]: $(el).find(`Col[id=${key}]`).text().trim(),
        }),
        {}
      )
    )
    .get();

  const writeSrc = `${src}.json`;
  fs.writeFile(writeSrc, JSON.stringify(data, null, 4));
}

const xmlSrc = path.resolve(__dirname, './assets/lect');
parse(xmlSrc);
