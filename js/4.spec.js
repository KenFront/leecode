const findMedianSortedArrays = require('./4')

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
