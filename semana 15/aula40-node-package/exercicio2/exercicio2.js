// EXERCÍCIO 2:

const application = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

if (application == "add") {
  console.log(`O resultado é ${number1 + number2}`)
} else if (application == "sub") {
  console.log(`O resultado é ${number1 - number2}`)
} else if (application == "mult") {
  console.log(`O resultado é ${number1 * number2}`)
} else if (application == "div") {
  console.log(`O resultado é ${number1 / number2}`)
}
