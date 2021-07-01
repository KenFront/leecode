const twoSum = require('./1')

describe('leecode:1', () => {
  test('case 1', () => {
    const input = [[2, 7, 11, 15], 9]
    const output = [0, 1]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
})
