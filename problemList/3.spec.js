const lengthOfLongestSubstring = require('./3')

describe('leecode:3', () => {
  test('case 1', () => {
    const input = 'abcabcbb'
    const output = 3
    const result = lengthOfLongestSubstring(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = 'bbbbb'
    const output = 1
    const result = lengthOfLongestSubstring(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = 'pwwkew'
    const output = 3
    const result = lengthOfLongestSubstring(input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = 'dvdf'
    const output = 3
    const result = lengthOfLongestSubstring(input)
    expect(result).toEqual(output)
  })
  test('case 5', () => {
    const input = 'aab'
    const output = 2
    const result = lengthOfLongestSubstring(input)
    expect(result).toEqual(output)
  })
})
