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

module.exports = reverse
