const longestPalindrome = require('./5')

describe('leecode:5', () => {
  test('case 1', () => {
    const input = 'babad'
    const output = 'bab'
    const result = longestPalindrome(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = 'cbbd'
    const output = 'bb'
    const result = longestPalindrome(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = 'ac'
    const output = 'a'
    const result = longestPalindrome(input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = 'ccc'
    const output = 'ccc'
    const result = longestPalindrome(input)
    expect(result).toEqual(output)
  })
  test('case 5', () => {
    const input = 'abcda'
    const output = 'a'
    const result = longestPalindrome(input)
    expect(result).toEqual(output)
  })
})
