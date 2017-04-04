const randomNd = require('@star-stuff/random-nd')

module.exports = weightedElements => seed => {
  const weights = weightedElements.map(
    (element, index) => element.weight * randomNd(seed, index)
  )

  const total = weights.reduce(
    (total, weight) => total + weight,
    0
  )

  return weights.map(
    (weight, index) => ({
      code: weightedElements[index].code,
      ratio: weight / total
    })
  )
}
