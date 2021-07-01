package golang_test

import (
	l "leecode/golang"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAddTwoNumbersCase1(t *testing.T) {
	l1 := &l.ListNode{
		Val: 2,
		Next: &l.ListNode{
			Val: 4,
			Next: &l.ListNode{
				Val: 3,
			},
		},
	}
	l2 := &l.ListNode{
		Val: 5,
		Next: &l.ListNode{
			Val: 6,
			Next: &l.ListNode{
				Val: 4,
			},
		},
	}
	output := &l.ListNode{
		Val: 7,
		Next: &l.ListNode{
			Val: 0,
			Next: &l.ListNode{
				Val: 8,
			},
		},
	}
	assert.Equal(t, output, l.AddTwoNumbers(l1, l2))
}
