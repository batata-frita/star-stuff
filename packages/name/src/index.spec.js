const name = require('./index')

it('should generate a simple name from a noise', () => {
  expect(name(0.7)).toMatchSnapshot()
})
