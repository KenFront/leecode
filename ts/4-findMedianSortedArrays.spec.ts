import { findMedianSortedArrays } from './4-findMedianSortedArrays'

describe.only('leecode:4', () => {
  test('case 1', () => {
    const nums1 = [1, 3]
    const nums2 = [2]
    const output = 2
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    const output = 2.5
    const result = findMedianSortedArrays(nums1, nums2)
    expect(result).toEqual(output)
  })
})
