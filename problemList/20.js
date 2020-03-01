const isValid = (s) => {
  const pair1 = ['(', ')']
  const pair2 = ['[', ']']
  const pair3 = ['{', '}']
  const pairList = {
    [pair1[1]]: pair1[0],
    [pair2[1]]: pair2[0],
    [pair3[1]]: pair3[0],
  }
  const checkList = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case pair1[0]:
      case pair2[0]:
      case pair3[0]:
        checkList.unshift(s[i])
        break
      case pair1[1]:
      case pair2[1]:
      case pair3[1]:
        if (checkList[0] === pairList[s[i]]) {
          checkList.shift()
        } else {
          checkList.push('')
        }
    }
  }
  return !checkList.length
}

describe('leecode:20', () => {
  test('case 1', () => {
    const input = '()'
    const output = true
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = '()[]{}'
    const output = true
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = '(]'
    const output = false
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = '([)]'
    const output = false
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 5', () => {
    const input = '{[]}'
    const output = true
    const result = isValid(input)
    expect(result).toEqual(output)
  })
  test('case 6', () => {
    const input = ']'
    const output = false
    const result = isValid(input)
    expect(result).toEqual(output)
  })
})
