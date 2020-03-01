const twoSum = require('./1')

describe('leecode(rx):1', () => {
  test('case 1', () => {
    const input = [[2, 7, 11, 15], 9]
    const output = [0, 1]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [[12, 15, 4, 5], 9]
    const output = [2, 3]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = [[2, 2, 5, 8, 9, 5], 7]
    const output = [0, 2]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = [[3, 3, 5, 8, 9, 5], 8]
    const output = [0, 2]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
})
