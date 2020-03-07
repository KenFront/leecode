const dailyTemperatures = (T) => {
  if (T.length > 30000 || T.length === 0) {
    return []
  }
  const result = []
  const copy = T.slice()
  T.forEach((val) => {
    copy.shift()
    const index = copy.findIndex((t) => t > val) + 1
    result.push(index)
  })
  return result
}
module.exports = dailyTemperatures
