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
  const endpoints = readJSON('alcampo.json');

  const products = [];
  for (let i = 10000; i < 11000; i += 1) {
    if (endpoints[i]) {
      products.push(getProductInformation(endpoints[i].url));
    }
  }

  Promise.all(products)
    .then((result) => {
      const information = readJSON('alcampo-products10.json');
      information.push(result);
      fs.writeFileSync('alcampo-products11.json', JSON.stringify(information), 'utf8');
    })
    .catch((err) => {
      console.log('err', err);
    });
}

getProductsInformation();
