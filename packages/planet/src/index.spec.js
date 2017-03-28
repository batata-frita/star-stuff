const planet = require('./index');

test('a planet is created', () => {
  const pluto = planet(0.5)
  expect(pluto).toEqual({})
});
