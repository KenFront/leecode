const isValid = require('./20')

describe('leecode:20', () => {
  test('case 1', () => {
    const input = '()'
    const output = true
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = '()[]{}'
    const output = true
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = '(]'
    const output = false
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = '([)]'
    const output = false
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 5', () => {
    const input = '{[]}'
    const output = true
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 6', () => {
    const input = ']'
    const output = false
    const result = isValid(input)
    expect(result).toEqual(output)
  })
})
