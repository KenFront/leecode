const { from } = require('rxjs/internal/observable/from')
const { pipe } = require('rxjs/internal/util/pipe')
const { switchMap } = require('rxjs/internal/operators/switchMap')
const { findIndex } = require('rxjs/internal/operators/findIndex')
const { filter } = require('rxjs/internal/operators/filter')
const { map } = require('rxjs/internal/operators/map')

const twoSum = (nums, target) => {
  const result = []
  const findMatchedIndex = (x) => findIndex((y) => x + y === target)
  const getMatchPosision = (i) => map((y) => [i, y])
  const isExistIndex = filter((val) => ~val[0] && ~val[1])
  const findPostionByNums = switchMap((x, i) =>
    from(nums).pipe(findMatchedIndex(x), getMatchPosision(i), isExistIndex),
  )
  const findPairs = pipe(findPostionByNums)

  const stream = from(nums).pipe(findPairs)
  const sub = stream.subscribe((val) => {
    result.push(...val)
    sub.unsubscribe()
  })
  return result.sort()
}
describe('leecode(rx):1', () => {
  test('case 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const result = twoSum(nums, target)
    expect(result).toEqual([0, 1])
  })
  test('case 2', () => {
    const nums = [12, 15, 4, 5]
    const target = 9
    const result = twoSum(nums, target)
    expect(result).toEqual([2, 3])
  })
  test('case 3', () => {
    const nums = [2, 2, 5, 8, 9, 5]
    const target = 7
    const result = twoSum(nums, target)
    expect(result).toEqual([0, 2])
  })
  test('case 4', () => {
    const nums = [3, 3, 5, 8, 9, 5]
    const target = 8
    const result = twoSum(nums, target)
    expect(result).toEqual([0, 2])
  })
})
