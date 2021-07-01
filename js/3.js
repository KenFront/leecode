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

module.exports = lengthOfLongestSubstring
