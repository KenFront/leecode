package golang

func FindMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	mixedList := nums1
	tempIndex := 0
	for i, num := range nums2 {
		for tempIndex != len(mixedList) {
			if mixedList[tempIndex] >= num {
				mixedList = append(mixedList, 0)
				copy(mixedList[tempIndex+1:], mixedList[tempIndex:])
				mixedList[tempIndex] = num
				tempIndex += 1
				break
			}
			tempIndex += 1
		}
		if tempIndex == len(mixedList) {
			mixedList = append(mixedList, nums2[i:]...)
			break
		}
	}
	index := len(mixedList)
	if index%2 == 1 {
		return float64(mixedList[index/2])
	} else {
		return float64(mixedList[index/2]+mixedList[index/2-1]) / 2
	}
}
