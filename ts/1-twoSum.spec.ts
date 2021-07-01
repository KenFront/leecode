import { twoSum } from './1-twoSum'

describe('1-twoSum', () => {
  test('case 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const output = [1, 0]
    const result = twoSum(nums, target)
    expect(result).toEqual(output)
  })
})
