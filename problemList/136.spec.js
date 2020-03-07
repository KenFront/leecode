const singleNumber = require('./136')

describe('leecode:136', () => {
  test('case 1', () => {
    const input = [2, 2, 1]
    const output = 1
    const result = singleNumber(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [4, 1, 2, 1, 2]
    const output = 4
    const result = singleNumber(input)
    expect(result).toEqual(output)
  })
})
