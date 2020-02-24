const reverse = (x) => {
  const str = `${x}`.split('')
  if (str[0] === '-') {
    const min = -Math.pow(2, 31)
    str.shift()
    let val = -str.reverse().join('')
    val = val > min ? val : 0
    return val
  } else {
    const max = Math.pow(2, 31) - 1
    let val = +str.reverse().join('')
    val = val < max ? val : 0
    return val
  }
}

describe('leecode:6', () => {
  test('case 1', () => {
    const input = 123
    const output = 321
    const result = reverse(input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = -123
    const output = -321
    const result = reverse(input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = 120
    const output = 21
    const result = reverse(input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = 1534236469
    const output = 0
    const result = reverse(input)
    expect(result).toEqual(output)
  })
})
