const ListNode = require('./ListNode')

const removeNthFromEnd = require('./19')

describe('leecode:19', () => {
  test('case 1', () => {
    const nodes = [1, 2, 3, 4, 5].map((val) => new ListNode(val))
    const inputHead = nodes[0]
    nodes[0].next = nodes[1]
    nodes[1].next = nodes[2]
    nodes[2].next = nodes[3]
    nodes[3].next = nodes[4]
    const input = [inputHead, 2]
    const nodes2 = [1, 2, 3, 5].map((val) => new ListNode(val))

    const output = nodes2[0]
    nodes2[0].next = nodes2[1]
    nodes2[1].next = nodes2[2]
    nodes2[2].next = nodes2[3]
    const result = removeNthFromEnd(...input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const nodes = new ListNode(1)
    const input = [nodes, 1]

    const output = null
    const result = removeNthFromEnd(...input)
    expect(result).toEqual(output)
  })
})
