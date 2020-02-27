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
  const isExistIndex = filter((val) => ~val)
  const findPostionByNums = switchMap((x, i) =>
    from(nums).pipe(findMatchedIndex(x), isExistIndex, getMatchPosision(i)),
  )
  const findPairs = pipe(findPostionByNums)

  const stream = from(nums).pipe(findPairs)
  const sub = stream.subscribe((val) => {
    result.push(...val)
    sub.unsubscribe()
  })
  return result
}
describe('leecode(rx):1', () => {
  test('case 1', () => {
    const input = [[2, 7, 11, 15], 9]
    const output = [0, 1]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
  test('case 2', () => {
    const input = [[12, 15, 4, 5], 9]
    const output = [2, 3]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
  test('case 3', () => {
    const input = [[2, 2, 5, 8, 9, 5], 7]
    const output = [0, 2]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
  test('case 4', () => {
    const input = [[3, 3, 5, 8, 9, 5], 8]
    const output = [0, 2]
    const result = twoSum(...input)
    expect(result).toEqual(output)
  })
})
