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

describe('leecode:1', () => {
  test('case 1', () => {
    const input = [[2, 7, 11, 15], 9]
    const output = [0, 1]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
})
