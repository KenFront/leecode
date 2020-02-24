const longestPalindrome = (s) => {
  const findMaxPalindrome = ({ start, end }) => {
    while (s[start - 1] && s[end + 1] && s[start - 1] === s[end + 1]) {
      start -= 1
      end += 1
    }
    return { start, end }
  }
  switch (s.length) {
    case 0:
    case 1:
      return s
    case 2:
      return s[0] === s[1] ? s : s[0]
    default: {
      const resultList = []
      for (let i = 1; i < s.length; i++) {
        const { start, end } = findMaxPalindrome({
          start: i,
          end: i,
        })
        if (s[i] === s[i - 1]) {
          const evenRange = findMaxPalindrome({
            start: i - 1,
            end: i,
          })
          const oddLen = end - start
          const evenLen = evenRange.end - evenRange.start
          if (oddLen > 0 || evenLen > 0) {
            resultList.push(oddLen > evenLen ? { start, end } : evenRange)
          }
        } else {
          if (end - start > 0) {
            resultList.push({ start, end })
          }
        }
      }
      const max = resultList.sort(
        (a, b) => b.end + a.start - b.start - a.end,
      )[0] || { start: 0, end: 0 }
      return s.slice(max.start, max.end + 1)
    }
  }
}

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
