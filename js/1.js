const twoSum = (nums, target) => {
  const result = []
  nums.some((num, i) => {
    const matched = target - num
    const matchedIndex = nums.findIndex(
      (item, index) => item === matched && index !== i,
    )
    if (matchedIndex > -1) {
      result.push(i)
      result.push(matchedIndex)
    }
    return result.length
  })
  return result
}

module.exports = twoSum
