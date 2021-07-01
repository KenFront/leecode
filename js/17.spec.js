const letterCombinations = require('./17')

describe('leecode:17', () => {
  test('case 1', () => {
    const input = '23'
    const output = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    const result = letterCombinations(input)
    output.every((item) => expect(result.includes(item)).toBeTruthy())
  })
})
