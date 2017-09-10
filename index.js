const jsonifyGetRequest = require('jsonify-get-request');

for (let i = 0; i < 405; i += 1) {
  const endpoint = `https://wrapapi.com/use/tommytrg/alcampo/prueba1alcampo/0.0.3?page=${i}&wrapAPIKey=Zr9bRkPvvQVS6beAoemHChcfPlUtMk23`;
  jsonifyGetRequest(endpoint, 'pdp_endpoints.json');
}
