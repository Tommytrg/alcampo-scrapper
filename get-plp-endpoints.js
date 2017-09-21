const Xray = require('x-ray');

const x = Xray();

const endpoint_food = 'https://www.alcampo.es/compra-online/alimentacion/c/WC10?q=%3Aalcampo&page=0';
// alcampo-alimentacion.json

const endpoint_fresh = 'https://www.alcampo.es/compra-online/productos-frescos/c/W2112?q=%3Aalcampo&page=0';
// alcampo-frescos.json
const endpoint_ecological = 'https://www.alcampo.es/compra-online/dieteticos-y-ecologicos/c/W33?q=%3Aalcampo&page=0';
// alcampo-ecologicos.json
const endpoint_drinks = 'https://www.alcampo.es/compra-online/bebidas/c/WC11?q=%3Aalcampo&page=0';
// alcampo-bebidas.json

// const endpoint_baby = 'https://www.alcampo.es/compra-online/bebe/c/WC13?q=%3Aalcampo%3AcategoryChild%3AW1801';
// alcampo-bebe.json


x(endpoint_drinks, 'h2', [{ url: 'a@href' }])
  .paginate('.pagination a[rel=next]:last-child@href')
  .limit(120)
  .write('./alcampo-bebidas.json');

