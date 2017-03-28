const Alea = require('alea')

function random (seed) { return new Alea(seed)() }

module.exports = (...args) => args.reduce((acc, v) => random(acc + v), 0)
