const reverse = require('./7')

describe('leecode:6', () => {
  test('case 1', () => {
    const input = 123
    const output = 321
    const result = reverse(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = -123
    const output = -321
    const result = reverse(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = 120
    const output = 21
    const result = reverse(input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = 1534236469
    const output = 0
    const result = reverse(input)
    expect(result).toEqual(output)
  })
})
