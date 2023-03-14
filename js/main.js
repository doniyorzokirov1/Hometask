var user = Number(prompt(`Enter number`))

var three = user % 3
var five = user % 5
var p = document.querySelector(`.tittle`)
console.log(three)
console.log(five)
// /////
if (0 === three) {
  p.textContent = `Fizz`
} else if (0 === five) {
  p.textContent = `Buzz`
} else {
  p.textContent = `ERROR`
}
// /////
if (0 === three + five) {
  p.textContent = `FizzBuzz`
}
// /////
