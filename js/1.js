const twoSum = (nums, target) => {
  const result = []
  nums.some((num, i) => {
    const matched = target - num
    const matchedIndex = nums
      .slice(i)
      .findIndex((item, index) => item === matched && index + i !== i)
    if (matchedIndex > -1) {
      result.push(i)
      result.push(matchedIndex + i)
    }
    return result.length
  })
  return result
}

module.exports = twoSum
