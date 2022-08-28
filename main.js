// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const alertMessage = document.querySelector("#alertMessage")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keypress", enterKey)

// Funções
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão, não envie o formulário

  const inputNumber = document.querySelector("#inputNumber")

if (!inputNumber.value) {
    alertMessage.innerText = `Por favor, insira um número.`
    alertMessage.classList.remove("hide")
  } 
  else if (inputNumber.value < 0 || inputNumber.value > 10) {
    alertMessage.innerText = `Insira um número entre 0 e 10.`
    alertMessage.classList.remove("hide")
  }
  else if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    if (xAttempts == 1) {
      screen2.querySelector("h2").innerText = `Parabéns!
      Você acertou de primeira.`
    } else {
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }
  }
  else {
    alertMessage.innerText = `Não é o número ${inputNumber.value}. Tente novamente!`
    alertMessage.classList.remove("hide")
    inputNumber.value = ""
    xAttempts++
  }
}

function handleResetClick() {
  toggleScreen()
  inputNumber.value = ""
  randomNumber = Math.round(Math.random() * 10)
  alertMessage.classList.add("hide")
  xAttempts = 1
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterKey (e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}