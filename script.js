let strawberryImage = document.getElementById(`strawberryImage`)
let blueberryImage = document.getElementById(`blueberryImage`)
let cherryImage = document.getElementById(`cherryImage`)
let blenderImage = document.getElementById(`blenderImage`)
let smoothieImage = document.getElementById(`smoothieImage`)
let moneyImage = document.getElementById(`moneyImage`)

let strawberriesParagraph = document.getElementById(`strawberriesParagraph`)
let blueberriesParagraph = document.getElementById(`blueberriesParagraph`)
let cherriesParagraph = document.getElementById(`cherriesParagraph`)
let smoothiesParagraph = document.getElementById(`smoothiesParagraph`)
let moneyParagraph = document.getElementById(`moneyParagraph`)

let hireStrawberryPickerButton = document.getElementById(`hireStrawberryPickerButton`)
let hireBlueberryPickerButton = document.getElementById(`hireBlueberryPickerButton`)
let hireCherryPickerButton = document.getElementById(`hireCherryPickerButton`)
let hireOperatorButton = document.getElementById(`hireOperatorButton`)
let hireCashierButton = document.getElementById(`hireCashierButton`)

let strawberryPickersParagraph = document.getElementById(`strawberryPickersParagraph`)
let blueberryPickersParagraph = document.getElementById(`blueberryPickersParagraph`)
let cherryPickersParagraph = document.getElementById(`cherryPickersParagraph`)
let operatorsParagraph = document.getElementById(`operatorsParagraph`)
let cashiersParagraph = document.getElementById(`cashiersParagraph`)

let strawberries = 0
let blueberries = 0
let cherries = 0
let smoothies = 0
let money = 0

let strawberryPickers = 0
let blueberryPickers = 0
let cherryPickers = 0
let operators = 0
let cashiers = 0

strawberryImage.addEventListener(`click`, pickStrawberry)
blueberryImage.addEventListener(`click`, pickBlueberry)
cherryImage.addEventListener(`click`, pickCherry)
blenderImage.addEventListener(`click`, blendFruits)
smoothieImage.addEventListener(`click`, sellSmoothie)

hireStrawberryPickerButton.addEventListener(`click`, hireStrawberryPicker)
hireBlueberryPickerButton.addEventListener(`click`, hireBlueberryPicker)
hireCherryPickerButton.addEventListener(`click`, hireCherryPicker)
hireOperatorButton.addEventListener(`click`, hireOperator)
hireCashierButton.addEventListener(`click`, hireCashier)

function pickStrawberry() {
  strawberries = strawberries + 1
  updateFruits()
}

function pickBlueberry() {
  blueberries = blueberries + 1
  updateFruits()
}

function pickCherry() {
  cherries = cherries + 1
  updateFruits()
}

function blendFruits() {
  if (strawberries >= 2 && blueberries >= 5 && cherries >= 3) {
    strawberries = strawberries - 2
    blueberries = blueberries - 5
    cherries = cherries - 3
    updateFruits()

    smoothies = smoothies + 1
    updateSmoothies()
  }
}

function sellSmoothie() {
  if (smoothies >= 1) {
    smoothies = smoothies - 1
    updateSmoothies()

    money = money + 3
    updateMoney()
  }
}

function updateFruits() {
  strawberriesParagraph.innerHTML = `Strawberries: ${strawberries}`
  blueberriesParagraph.innerHTML = `Blueberries: ${blueberries}`
  cherriesParagraph.innerHTML = `Cherries: ${cherries}`

  if (strawberries >= 2 && blueberries >= 5 && cherries >= 3) {
    blenderImage.style.opacity = `100%`
  } else {
    blenderImage.style.opacity = `50%`
  }
}

function updateSmoothies() {
  smoothiesParagraph.innerHTML = `Smoothies: ${smoothies}`

  if (smoothies >= 1) {
    smoothieImage.style.opacity = `100%`
  } else {
    smoothieImage.style.opacity = `50%`
  }
}

function updateMoney() {
  moneyParagraph.innerHTML = `Money: $${money.toFixed(2)}`

  if (money > 0) {
    moneyImage.style.opacity = `100%`
  } else {
    moneyImage.style.opacity = `50%`
  }
}

function hireStrawberryPicker() {
  strawberryPickers = strawberryPickers + 1
  strawberryPickersParagraph.innerHTML = `Strawberry pickers: ${strawberryPickers}`

  setInterval(workerPickStrawberry, 1000)
}

function hireBlueberryPicker() {
  blueberryPickers = blueberryPickers + 1
  blueberryPickersParagraph.innerHTML = `Blueberry pickers: ${blueberryPickers}`

  setInterval(workerPickBlueberry, 1000)
}

function hireCherryPicker() {
  cherryPickers = cherryPickers + 1
  cherryPickersParagraph.innerHTML = `Cherry pickers: ${cherryPickers}`

  setInterval(workerPickCherry, 1000)
}

function hireOperator() {
  operators = operators + 1
  operatorsParagraph.innerHTML = `Blender operators: ${operators}`

  setInterval(workerBlendFruits, 1000)
}

function hireCashier() {
  cashiers = cashiers + 1
  cashiersParagraph.innerHTML = `Cashiers: ${cashiers}`

  setInterval(workerSellSmoothie, 1000)
}

function workerPickStrawberry() {
  pickStrawberry()

  money = money - 0.1
  updateMoney()
}

function workerPickBlueberry() {
  pickBlueberry()

  money = money - 0.1
  updateMoney()
}

function workerPickCherry() {
  pickCherry()

  money = money - 0.1
  updateMoney()
}

function workerBlendFruits() {
  blendFruits()

  money = money - 0.9
  updateMoney()
}

function workerSellSmoothie() {
  sellSmoothie()

  money = money - 0.9
  updateMoney()
}
