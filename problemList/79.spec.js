const exist = require('./79')
const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]

describe('leecode:79', () => {
  test('case 1', () => {
    const word = 'ABCCED'
    const result = exist(board, word)
    expect(result).toBe(true)
  })
  test('case 2', () => {
    const word = 'SEE'
    const result = exist(board, word)
    expect(result).toBe(true)
  })
  test('case 3', () => {
    const word = 'ABCB'
    const result = exist(board, word)
    expect(result).toBe(false)
  })
  test('case 4', () => {
    const board2 = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'E', 'S'],
      ['A', 'D', 'E', 'E'],
    ]
    const word = 'ABCESEEEFS'
    const result = exist(board2, word)
    expect(result).toBe(true)
  })
  test('case 5', () => {
    const board3 = [['a']]
    const word = 'a'
    const result = exist(board3, word)
    expect(result).toBe(true)
  })
})
