const orbits = require('./index')

it('should generate a set of orbit with radius between 0 and 1', () => {
  expect(orbits(0.2)).toMatchSnapshot()
})
