const Xray = require('x-ray');

const x = Xray();
const fs = require('fs');

function readJSON(name) {
  return JSON.parse(fs.readFileSync(name, 'utf8'));
}

function getProductInformation(endpoint) {
  return new Promise((resolve, reject) => {
    x(
      endpoint,
      'body',
      [
        {
          name: 'h1',
          brand: '.productTitle',
          img: '#imageLink img@src',
          ingredients: '.foodIngredients',
          kj: '.tablaValorContenido',
          kcal: 'tr+ tr .tablaValorContenido',
          fats: '.foodFats .kJ',
          carbohydrates: '.foodCarboHydrates .kJ',
          proteins: '.foodProteins .kJ',
          sugar: '.foodSugars .kJ',
          salt: '.foodSalt .kJ',
          saturated_fats: '.foodSaturatedFats .kJ',
          conservation: '.productConservationCoditions',
        },
      ],
    )((err, res) => {
      resolve(res);
      reject(err);
    });
  });
}

function getProductsInformation() {
  const endpoints = readJSON('alcampo-frescos.json');

  const products = [];
  for (let i = 3000; i < 3500s; i += 1) {
    if (endpoints[i]) {
      products.push(getProductInformation(endpoints[i].url));
    }
  }

  Promise.all(products)
    .then((result) => {
      const information = readJSON('alcampo-frescos-productos.json');
      information.push(result);
      fs.writeFileSync('alcampo-frescos-productos.json', JSON.stringify(information), 'utf8');
    })
    .catch((err) => {
      console.log('err', err);
    });
}

getProductsInformation();
