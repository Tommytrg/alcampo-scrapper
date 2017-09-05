function arrayGenerator (size, min, max) {
  if (!arguments.length) return []

  switch (typeof size) {
    case 'number':
      return generateSimpleArray(size, min, max)

    case 'object': // TBD
      return []
      // return generateVerboseArray(size)
    default:
      return []
  }
}

function generateSimpleArray (size, min, max) {
  let array = []
  let inserted
  let number
  for (let i = 0; i < size; i += 1) {
    inserted = false
    while (!inserted) {
      number = getRandomInt(min, max)
      if (array.indexOf(number) === -1 || (array.length >= max - min)) {
        array.push(number)
        inserted = true
      }
    }
  }
  return array
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = arrayGenerator
