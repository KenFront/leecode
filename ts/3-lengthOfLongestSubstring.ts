export const lengthOfLongestSubstring = (s: string): number => {
  let temp = ''
  let max = 0

  for (let i = 0; i < s.length; i++) {
    const index = temp.indexOf(s[i])
    if (index !== -1) {
      temp = temp.substring(index + 1)
    }
    temp += s[i]
    const len = temp.length
    if (max < len) {
      max = len
    }
  }

  return max
}
