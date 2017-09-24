const fs = require('fs');

const nameFiles = ['alimentacion', 'bebidas', 'ecologicos', 'frescos'];

function readJSON(name) {
  return JSON.parse(fs.readFileSync(name, 'utf8'));
}

function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf8');
}

function joinProducts(files) {
  files
    .forEach((file) => {
      const newProducts = readJSON(`productos-${file}.json`);
      const allProducts = readJSON('productos-alcampo.json');
      const products = [].concat(...newProducts).concat(...allProducts);

      writeJSON('productos-alcampo.json', products);
    });
}

joinProducts(nameFiles);
