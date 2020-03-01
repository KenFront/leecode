const maxArea = require('./11')

describe('leecode:11', () => {
  test('case 1', () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    const output = 49
    const result = maxArea(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [1, 1]
    const output = 1
    const result = maxArea(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = [1, 2, 4, 3]
    const output = 4
    const result = maxArea(input)
    expect(result).toEqual(output)
  })
})
