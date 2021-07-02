package golang_test

import (
	l "leecode/golang"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFindMedianSortedArraysCase1(t *testing.T) {
	nums1 := []int{1, 3}
	nums2 := []int{2}
	output := float64(2)
	assert.Equal(t, output, l.FindMedianSortedArrays(nums1, nums2))
}
func TestFindMedianSortedArraysCase2(t *testing.T) {
	nums1 := []int{1, 2}
	nums2 := []int{3, 4}
	output := 2.5
	assert.Equal(t, output, l.FindMedianSortedArrays(nums1, nums2))
}
