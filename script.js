function callAdd(a, b) {
  total = a + b
  console.log(total)
}

function callSub(a, b) {
  total = a - b
  console.log(total)
}

function callMult(a, b) {
  total = a * b
  console.log(total)
}

function callDiv(a, b) {
  total = a / b
  console.log(total)
}

function callculator(a, b, operator) {
  a = parseFloat(prompt('Digite o primeiro numero'))
  operator = prompt('Digite o operador')
  b = parseFloat(prompt('Digite o segundo numero'))

  switch (operator) {
    case '+':
      callAdd(a, b)
      break
    case '-':
      callSub(a, b)
      break
    case '*':
      callMult(a, b)
      break
    case '/':
      callDiv(a, b)
      break
  }
}

callculator()
