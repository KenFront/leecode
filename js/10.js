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

module.exports = isMatch
