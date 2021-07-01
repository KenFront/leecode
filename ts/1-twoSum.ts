const twoSum = (nums: number[], target: number): number[] => {
  const hash: {
    [key: number]: number
  } = {}
  const result: number[] = []
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

export { twoSum }
