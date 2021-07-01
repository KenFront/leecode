package golang

func TwoSum(nums []int, target int) []int {
	var results []int
	for i, n := range nums {
		matched := target - n
		for j, m := range nums[i:] {
			if m == matched && i != j+i {
				results = []int{i, j + i}
				break
			}
		}
		if len(results) > 0 {
			break
		}
	}
	return results
}
