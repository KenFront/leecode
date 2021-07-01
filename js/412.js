const fizzBuzz = (n) =>
  new Array(n).fill('').map((item, i) => {
    const num = i + 1
    if (num % 15 === 0) {
      return 'FizzBuzz'
    }
    if (num % 3 === 0) {
      return 'Fizz'
    }
    if (num % 5 === 0) {
      return 'Buzz'
    }
    return `${num}`
  })

module.exports = fizzBuzz
