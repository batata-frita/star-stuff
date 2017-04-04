const database = require('./database')
const randomNd = require('@star-stuff/random-nd')
const range = require('ramda/src/range')

const SYLLABLES_AMMOUNT_SALT = 'star-stuff/name/syllablesAmmount'
const SYLLABLE_SALT = 'star-stuff/name/syllablesAmmount'
const MAX_SYLLABLES = 5

module.exports = (noise) => {
  const syllablesAmmount = Math.ceil(randomNd(noise, SYLLABLES_AMMOUNT_SALT) * MAX_SYLLABLES)

  return range(0, syllablesAmmount)
    .map((_, index) => database[Math.ceil(randomNd(noise, SYLLABLE_SALT, index) * database.length)])
    .join('')
}
