const isMatch = require('./10')

describe('leecode:10', () => {
  test('case 1', () => {
    const input = ['aa', 'a']
    const output = false
    const result = isMatch(...input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = ['aa', 'a*']
    const output = true
    const result = isMatch(...input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = ['ab', '.*']
    const output = true
    const result = isMatch(...input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = ['aab', 'c*a*b']
    const output = true
    const result = isMatch(...input)
    expect(result).toEqual(output)
  })
  test('case 5', () => {
    const input = ['mississippi', 'mis*is*p*.']
    const output = false
    const result = isMatch(...input)
    expect(result).toEqual(output)
  })
})
