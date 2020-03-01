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

module.exports = twoSum
