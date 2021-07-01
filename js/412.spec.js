const fizzBuzz = require('./412')

describe('leecode:136', () => {
  test('case 1', () => {
    const input = 15
    const output = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]
    const result = fizzBuzz(input)
    expect(result).toEqual(output)
  })
})
