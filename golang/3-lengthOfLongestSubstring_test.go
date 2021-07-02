package golang_test

import (
	l "leecode/golang"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestLengthOfLongestSubstringCase1(t *testing.T) {
	str := "abcabcbb"
	output := 3
	assert.Equal(t, output, l.LengthOfLongestSubstring(str))
}

func TestLengthOfLongestSubstringCase2(t *testing.T) {
	str := "bbbbb"
	output := 1
	assert.Equal(t, output, l.LengthOfLongestSubstring(str))
}

func TestLengthOfLongestSubstringCase3(t *testing.T) {
	str := "pwwkew"
	output := 3
	assert.Equal(t, output, l.LengthOfLongestSubstring(str))
}

func TestLengthOfLongestSubstringCase4(t *testing.T) {
	str := "dvdf"
	output := 3
	assert.Equal(t, output, l.LengthOfLongestSubstring(str))
}

func TestLengthOfLongestSubstringCase5(t *testing.T) {
	str := "aab"
	output := 2
	assert.Equal(t, output, l.LengthOfLongestSubstring(str))
}
