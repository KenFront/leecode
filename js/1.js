const twoSum = (nums, target) => {
  const hash = {}
  const result = []
  nums.some((v, i) => {
    const value = hash[target - nums[i]]
    if (value > -1) {
      result.push(i)
      result.push(value)
    } else {
      hash[v] = i
    }
    return result.length !== 0
  })
  return result
}

module.exports = twoSum
