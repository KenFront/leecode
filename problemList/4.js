const findMedianSortedArrays = (nums1, nums2) => {
  const mixedList = [...nums1, ...nums2].sort((a, b) => a - b)
  const centerIndex = mixedList.length / 2
  return centerIndex % 1 === 0
    ? (mixedList[centerIndex] + mixedList[centerIndex - 1]) / 2
    : mixedList[centerIndex - 0.5]
}

describe('leecode:4', () => {
  test('case 1', () => {
    const input = [[1, 3], [2]]
    const output = 2
    const result = findMedianSortedArrays(...input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [
      [1, 2],
      [3, 4],
    ]
    const output = 2.5
    const result = findMedianSortedArrays(...input)
    expect(result).toEqual(output)
  })
})
