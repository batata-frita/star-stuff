const star = require('./index')

describe('lifespan', () => {
  it('should generate a lifespan between 0 and 1', () => {
    expect(star.lifespan(0.5)).toMatchSnapshot()
  })
})

describe('type', () => {
  it('should generate a type', () => {
    expect(star.type(0.7)).toMatchSnapshot()
  })
})
