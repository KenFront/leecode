const lengthOfLongestSubstring = (s) => {
  const resultList = [
    {
      index: -1,
      val: '',
    },
  ]
  s.split('').forEach((char, index) => {
    resultList.forEach((result) => {
      if (result.index === index - 1 && !result.val.includes(char)) {
        result.index = index
        result.val += char
      }
    })
    const charIndex = resultList.findIndex((result) => result.val === char)
    if (charIndex > -1) {
      resultList[charIndex].index = index
    } else {
      resultList.push({
        index,
        val: char,
      })
    }
  })
  return resultList.sort((a, b) => b.val.length - a.val.length)[0].val.length
}

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
