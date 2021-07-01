const digitsMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}
const letterCombinations = (digits) => {
  let resultList = []
  for (let i = 0; i < digits.length; i++) {
    const charMap = digitsMap[digits[i]]
    if (i) {
      resultList = charMap
        .map((char) => resultList.map((result) => result + char))
        .reduce((list, items) => [...list, ...items], [])
    } else {
      resultList = charMap
    }
  }
  return resultList
}

module.exports = letterCombinations
