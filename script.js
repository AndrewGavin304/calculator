function add(a, b) {return a+b}

function subtract(a, b) {return a-b}

function multiply(a, b) {return a*b}

function divide(a, b) {
  if (b==0){
    alert("please stop");
    return 0;
  }
  else {
  return a/b;
  }
}

function operate(operationSymbol, a, b) {
  operand2 = parseFloat(display.textContent);
  console.log(operationSymbol)
  switch (operationSymbol) {
  case '/': operator = divide;
  break;
  case '-': operator = subtract;
  break;
  case 'X': operator = multiply;
  break;
  case '+': operator = add;
  break;
  }
  if (!operator == "") {
    operand1 = operator(a, b);
  }
  display.textContent = operand1;
  operationSymbol = ""
  operator = ""
}

function clear() {
  display.textContent = "0";
  operand1 = ""
  operand2 = ""
  operator = ""
  operationSymbol = ""
  return;
}

const buttons = document.querySelectorAll('.button')
const display = document.getElementById("display")
let operand1 = ""
let operand2 = ""
let operator = ""
let operationSymbol = ""

buttons.forEach(function(button){
  button.addEventListener('click', event => {
    if (event.target.classList.contains("operator")) {
      if (operand1 == "") {
        operand1 = parseFloat(display.textContent);
      }
      else {
        operand2 = parseFloat(display.textContent);
        operate(operationSymbol, operand1, operand2)
      }
      operationSymbol = event.target.textContent;
      return;
    }

    if (event.target.id == "equals") {
      operand2 = parseFloat(display.textContent);
      if ((operand1 != "") && (operationSymbol != "")) {
        operate(operationSymbol, operand1, operand2);
        operationSymbol = ""
    }
    }
      
    else if (event.target.id == "clear") {
      clear()
    }

    else if ((display.textContent == 0) || (display.textContent == operand1)) {
      display.textContent = button.textContent;
    }
    
    else {
      display.textContent += button.textContent;
    }
  })

})
