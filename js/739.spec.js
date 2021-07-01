const dailyTemperatures = require('./739')

describe('leecode:739', () => {
  test('case 1', () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73]
    const output = [1, 1, 4, 2, 1, 1, 0, 0]
    const result = dailyTemperatures(input)
    expect(result).toEqual(output)
  })
})
