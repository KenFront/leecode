const ListNode = require('./ListNode')

const removeNthFromEnd = (head, n) => {
  let total = 0
  let nowNode = head
  while (nowNode) {
    total++
    nowNode = nowNode.next
  }
  const temp = new ListNode(0)
  temp.next = head
  total -= n
  nowNode = temp
  while (total) {
    total -= 1
    nowNode = nowNode.next
  }
  nowNode.next = nowNode.next.next
  return temp.next
}

module.exports = removeNthFromEnd
