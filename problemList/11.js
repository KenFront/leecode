const calcArea = (minHeight, width) => minHeight * width
const maxArea = (height) => {
  let max = 0
  height.forEach((line, index) => {
    for (let i = index + 1; i < height.length; i++) {
      const val = calcArea(line < height[i] ? line : height[i], i - index)
      max = max > val ? max : val
    }
  })
  return max
}

module.exports = maxArea
