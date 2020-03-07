const singleNumber = (nums) => {
  let val = 0
  nums.forEach((num) => {
    val ^= num
  })
  return val
}
module.exports = singleNumber
