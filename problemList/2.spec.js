const ListNode = require('./utils/ListNode')

const addTwoNumbers = require('./2')

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
