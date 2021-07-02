package golang

import "bytes"

func LengthOfLongestSubstring(s string) int {
	temp := []byte{}
	max := 0
	for i := range s {
		if index := bytes.IndexByte(temp, s[i]); index > -1 {
			temp = temp[index+1:]
		}
		temp = append(temp, s[i])
		length := len(temp)
		if max < length {
			max = length
		}
	}
	return max
}
