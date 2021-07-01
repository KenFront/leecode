import { ListNode } from './ListNode'

const addTwoNumbers = (l1: ListNode, l2: ListNode) => {
  const result = new ListNode(0)
  let temp = result
  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      temp.val += l1.val
      l1 = l1.next as ListNode
    }
    if (l2 !== null) {
      temp.val += l2.val
      l2 = l2.next as ListNode
    }
    if (temp.val > 9) {
      temp.val -= 10
      temp.next = new ListNode(1)
    } else {
      if (l1 || l2) {
        temp.next = new ListNode(0)
      }
    }
    temp = temp.next as ListNode
  }
  return result
}

export { addTwoNumbers }
