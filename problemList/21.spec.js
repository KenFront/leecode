const ListNode = require('./utils/ListNode')

const mergeTwoLists = require('./21')

describe('leecode:19', () => {
  test('case 1', () => {
    const nodes1 = [1, 2, 4].map((val) => new ListNode(val))
    const nodes2 = [1, 3, 4].map((val) => new ListNode(val))
    const list1 = nodes1[0]
    nodes1[0].next = nodes1[1]
    nodes1[1].next = nodes1[2]
    const list2 = nodes2[0]
    nodes2[0].next = nodes2[1]
    nodes2[1].next = nodes2[2]

    const input = [list1, list2]
    const nodes3 = [1, 1, 2, 3, 4, 4].map((val) => new ListNode(val))

    const output = nodes3[0]
    nodes3[0].next = nodes3[1]
    nodes3[1].next = nodes3[2]
    nodes3[2].next = nodes3[3]
    nodes3[3].next = nodes3[4]
    nodes3[4].next = nodes3[5]
    const result = mergeTwoLists(...input)
    expect(result).toEqual(output)
  })
})
