package golang_test

import (
	l "leecode/golang"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestTwoSumCase1(t *testing.T) {
	nums := []int{2, 7, 11, 15}
	target := 9
	output := []int{1, 0}
	assert.Equal(t, output, l.TwoSum(nums, target))
}
