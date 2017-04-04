const randomNd = require('.')

it('should generate a random number based on n dimensions', () => {
  expect(randomNd(1, 2, 3, 4)).toMatchSnapshot()
})
