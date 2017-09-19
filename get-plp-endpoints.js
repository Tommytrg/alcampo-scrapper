const Xray = require('x-ray');

const x = Xray();

const endpoint = 'https://www.alcampo.es/compra-online/alimentacion/c/WC10?q=%3Aalcampo&page=0';

x(endpoint, 'h2', [{ url: 'a@href' }])
  .paginate('.pagination a[rel=next]:last-child@href')
  .limit(405)
  .write('./alcampo.json');

