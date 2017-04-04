const randomNd = require('@star-stuff/random-nd')
const pipe = require('ramda/src/pipe')

const LIFESPAN_SALT = 'star-stuff/star/lifespan'

const TYPES = [
  {
    name: 'O',
    threshold: 0.2
  },
  {
    name: 'F',
    threshold: 0.4
  },
  {
    name: 'G',
    threshold: 0.6
  },
  {
    name: 'K',
    threshold: 0.8
  },
  {
    name: 'M',
    threshold: 1
  }
]

const lifespan = (noise) => randomNd(noise, LIFESPAN_SALT)

const type = pipe(
  lifespan,
  (lifespan) => TYPES.reduce((actual, candidate) => {
    if (actual != null) { return actual }
    if (lifespan < candidate.threshold) { return candidate }
  }, null)
)

module.exports = {
  lifespan,
  type
}
