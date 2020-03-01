const canSkipCheck = (sortedNums, i) => sortedNums[i] === sortedNums[i - 1]

const threeSum = (nums) => {
  if (nums.length > 2) {
    const sortedNums = nums.sort((a, b) => a - b)
    const resultList = []
    for (let i = 0; i < sortedNums.length - 2; i++) {
      if (i === 0 || (i > 0 && !canSkipCheck(sortedNums, i))) {
        let high = sortedNums.length - 1
        let low = i + 1
        const sum = -sortedNums[i]
        while (low < high) {
          switch (true) {
            case sortedNums[high] + sortedNums[low] > sum:
              high--
              break
            case sortedNums[high] + sortedNums[low] < sum:
              low++
              break
            default:
              resultList.push([
                sortedNums[i],
                sortedNums[low],
                sortedNums[high],
              ])
              while (low < high && canSkipCheck(sortedNums, high)) high--
              while (low < high && canSkipCheck(sortedNums, low + 1)) low++
              low++
              high--
              break
          }
        }
      }
    }
    return resultList
  } else {
    return []
  }
}

describe('leecode:15', () => {
  test('case 1', () => {
    const input = [-1, 0, 1, 2, -1, -4]
    const output = [
      [-1, -1, 2],
      [-1, 0, 1],
    ]
    const result = threeSum(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [0, 0]
    const output = []
    const result = threeSum(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = [1, 2, -2, -1]
    const output = []
    const result = threeSum(input)
    expect(result).toEqual(output)
  })
})
