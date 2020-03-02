const ListNode = require('./utils/ListNode')

const mergeTwoLists = (l1, l2) => {
  const start = new ListNode(0)
  let now = start
  while (l1 && l2) {
    switch (true) {
      default:
      case l1.val < l2.val:
        now.next = l1
        now = now.next
        l1 = l1.next
        break
      case l1.val > l2.val:
        now.next = l2
        now = now.next
        l2 = l2.next
        break
    }
  }
  now.next = l1 || l2
  return start.next
}

module.exports = mergeTwoLists
