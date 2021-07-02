export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[],
): number => {
  let mixedList = nums1
  let tempIndex = 0
  nums2.some((num, index) => {
    while (tempIndex !== mixedList.length) {
      if (mixedList[tempIndex] >= num) {
        mixedList.splice(tempIndex, 0, num)
        tempIndex += 1
        break
      }
      tempIndex += 1
    }
    const isEnd = tempIndex === mixedList.length
    if (isEnd) {
      mixedList = mixedList.concat(nums2.slice(index))
    }
    return isEnd
  })
  const centerIndex = mixedList.length / 2
  return centerIndex % 1 === 0
    ? (mixedList[centerIndex] + mixedList[centerIndex - 1]) / 2
    : mixedList[centerIndex - 0.5]
}
