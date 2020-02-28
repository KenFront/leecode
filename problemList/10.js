const isFirstCharSame = (s, p) =>
  s.length > 0 && (s[0] === p[0] || p[0] === '.')

const isWithStar = (p) => p.length > 1 && p[1] === '*'

const isMatch = (s, p) => {
  switch (true) {
    case !p:
      return !s
    case isWithStar(p):
      return (
        isMatch(s, p.substr(2)) ||
        (isFirstCharSame(s, p) && isMatch(s.substr(1), p))
      )
    default:
      return isFirstCharSame(s, p) && isMatch(s.substr(1), p.substr(1))
  }
}

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
