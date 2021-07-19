import { ListNode } from './ListNode'

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (head === null) {
    return head
  }
  const result = new ListNode(-Infinity, head)
  let current: ListNode | null = result
  let last: ListNode | null = current
  while (current && current.next) {
    if (current.val === current.next.val) {
      const same = current
      while (same.val === current.val) {
        if (current.next) {
          current = current.next
          last.next = current
        } else {
          last.next = null
          break
        }
      }
    } else {
      last = current
      current = current.next
    }
  }
  return result.next
}
