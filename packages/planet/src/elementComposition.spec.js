const elementComposition = require('./elementComposition')

const weightedElements = [
  {
    code: 'H',
    weight: 60
  },
  {
    code: 'He',
    weight: 20
  },
  {
    code: 'O',
    weight: 5
  },
  {
    code: 'C',
    weight: 15
  }
]

test('elementComposition', () => {
  const composition = elementComposition(weightedElements)(0.5)

  expect(composition).toMatchSnapshot()
})
