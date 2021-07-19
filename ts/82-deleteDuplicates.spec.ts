import { deleteDuplicates } from './82-deleteDuplicates'
import { ListNode } from './ListNode'

describe.only('leecode:82', () => {
  test('case 1', () => {
    const list = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))),
        ),
      ),
    )
    const output = new ListNode(1, new ListNode(2, new ListNode(5)))
    const result = deleteDuplicates(list)
    expect(result).toEqual(output)
  })
})
