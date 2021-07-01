package golang

func TwoSum(nums []int, target int) []int {
	hash := map[int]int{}
	for i, val := range nums {
		value, ok := hash[target-nums[i]]
		if ok && value != i {
			return []int{i, value}
		} else {
			hash[val] = i
		}
	}
	return []int{}
}
