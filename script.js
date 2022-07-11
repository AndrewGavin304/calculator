function add(a, b) {return a+b}

function subtract(a, b) {return a-b}

function multiply(a, b) {return a*b}

function divide(a, b) {return a/b}

function operate(func, a, b) {return func(a, b)}

function clear() {
  display.textContent = "0"
  return;
}

const buttons = document.querySelectorAll('.button')
const display = document.getElementById("display")

buttons.forEach(function(button){
  button.addEventListener('click', event => {
    if (event.target.classList.contains("operator")) {
      console.log("fff")
    }
    if (event.target.id == "clear") {
      clear()
    }
    else if (display.textContent == 0) {
      display.textContent = button.textContent
    }
    else {
      display.textContent += button.textContent
    }
  }
)})