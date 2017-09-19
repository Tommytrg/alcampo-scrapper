const Xray = require('x-ray');

const x = Xray();

const endpoint = 'https://www.alcampo.es/compra-online/alimentacion/caldos-pasta-arroz-legumbres-pure/pasta/con-vegetales/barilla-12-penne-tricolor-500-gramos/p/515118';

x(
  endpoint,
  'body',
  [
    {
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
  if (err) console.log(err);
  console.log(res);
});
