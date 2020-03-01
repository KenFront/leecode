const threeSum = require('./15')

describe('leecode:15', () => {
  test('case 1', () => {
    const input = [-1, 0, 1, 2, -1, -4]
    const output = [
      [-1, -1, 2],
      [-1, 0, 1],
    ]
    const result = threeSum(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [0, 0]
    const output = []
    const result = threeSum(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = [1, 2, -2, -1]
    const output = []
    const result = threeSum(input)
    expect(result).toEqual(output)
  })
})
