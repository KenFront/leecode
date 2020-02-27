const ListNode = function(val) {
  this.val = val
  this.next = null
}
const addTwoNumbers = (l1, l2) => {
  const result = new ListNode(0)
  let temp = result
  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      temp.val += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      temp.val += l2.val
      l2 = l2.next
    }
    if (temp.val > 9) {
      temp.val -= 10
      temp.next = new ListNode(1)
    } else {
      if (l1 || l2) {
        temp.next = new ListNode(0)
      }
    }
    temp = temp.next
  }
  return result
}

describe('leecode:2', () => {
  test('case 1', () => {
    const input = [
      {
        val: 2,
        next: {
          val: 4,
          next: {
            val: 3,
            next: null,
          },
        },
      },
      {
        val: 5,
        next: {
          val: 6,
          next: {
            val: 4,
            next: null,
          },
        },
      },
    ]
    const output = new ListNode(7)
    output.next = new ListNode(0)
    output.next.next = new ListNode(8)
    const result = addTwoNumbers(...input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [
      {
        val: 1,
        next: {
          val: 8,
          next: null,
        },
      },
      {
        val: 0,
        next: null,
      },
    ]
    const output = new ListNode(1)
    output.next = new ListNode(8)
    const result = addTwoNumbers(...input)
    expect(result).toEqual(output)
  })
})
