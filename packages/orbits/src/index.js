const randomNd = require('@star-stuff/random-nd')
const range = require('ramda/src/range')

const ORBITS_AMOUNT = 'star-stuff/orbits/amount'
const ORBITS_ORBIT = 'star-stuff/orbits/orbit'
const ORBITS_DELTA = 'star-stuff/orbits/delta'
const MINIMUM_STEP = 0.05

const willItOverflow = (currentOrbits, nextOrbit) =>
  currentOrbits.reduce((total, orbit) => total + orbit, 0) + nextOrbit >= 1

const orbits = (noise, currentOrbits = []) => {
  const nextOrbit =
    MINIMUM_STEP +
    (
      randomNd(noise, ORBITS_ORBIT, currentOrbits.length) *
      randomNd(noise, ORBITS_DELTA)
    )

  return willItOverflow(currentOrbits, nextOrbit)
    ? currentOrbits
    : orbits(noise, currentOrbits.concat(nextOrbit))
}

module.exports = orbits
