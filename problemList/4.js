const findMedianSortedArrays = (nums1, nums2) => {
  const mixedList = [...nums1, ...nums2].sort((a, b) => a - b)
  const centerIndex = mixedList.length / 2
  return centerIndex % 1 === 0
    ? (mixedList[centerIndex] + mixedList[centerIndex - 1]) / 2
    : mixedList[centerIndex - 0.5]
}

module.exports = findMedianSortedArrays
