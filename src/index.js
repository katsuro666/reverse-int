module.exports = function reverse (n) {
    let abs = Math.abs(n)
    let number = abs.toString(10)
    let result = ''
    for (let i = number.length - 1; i >= 0; i--) {
        result = `${result}${number[i]}`
  }
  return result
}
