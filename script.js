var strawberry = document.getElementById("strawberry");
var blueberry = document.getElementById("blueberry");
var cherry = document.getElementById("cherry");
var blender = document.getElementById("blender");
var smoothie = document.getElementById("smoothie");
var moneyImage = document.getElementById("moneyImage");

var hireStrawberryPickerButton = document.getElementById("hireStrawberryPicker");
var hireBlueberryPickerButton = document.getElementById("hireBlueberryPicker");
var hireCherryPickerButton = document.getElementById("hireCherryPicker");
var hireOperatorButton = document.getElementById("hireOperator");
var hireCashierButton = document.getElementById("hireCashier");

var strawberriesDisplay = document.getElementById("strawberries");
var blueberriesDisplay = document.getElementById("blueberries");
var cherriesDisplay = document.getElementById("cherries");
var smoothiesDisplay = document.getElementById("smoothies");
var moneyDisplay = document.getElementById("money");

var strawberryPickersDisplay = document.getElementById("strawberryPickers");
var blueberryPickersDisplay = document.getElementById("blueberryPickers");
var cherryPickersDisplay = document.getElementById("cherryPickers");
var operatorsDisplay = document.getElementById("operators");
var cashiersDisplay = document.getElementById("cashiers");

var missedPaychecksDisplay = document.getElementById("missedPaychecks");
var strikeMessage = document.getElementById("strikeMessage");

var strawberries = 0;
var blueberries = 0;
var cherries = 0;
var smoothies = 0;
var money = 0;

var strawberryPickers = 0;
var blueberryPickers = 0;
var cherryPickers = 0;
var operators = 0;
var cashiers = 0;

var missedPaychecks = 0;
var strike = false;

strawberry.addEventListener("click", pickStrawberry);
blueberry.addEventListener("click", pickBlueberry);
cherry.addEventListener("click", pickCherry);
blender.addEventListener("click", blendFruits);
smoothie.addEventListener("click", sellSmoothie);

hireStrawberryPickerButton.addEventListener("click", hireStrawberryPicker);
hireBlueberryPickerButton.addEventListener("click", hireBlueberryPicker);
hireCherryPickerButton.addEventListener("click", hireCherryPicker);
hireOperatorButton.addEventListener("click", hireOperator);
hireCashierButton.addEventListener("click", hireCashier);

function pickStrawberry() {
    strawberries = strawberries + 1;
    updateFruits();
}

function pickBlueberry() {
    blueberries = blueberries + 1;
    updateFruits();
}

function pickCherry() {
    cherries = cherries + 1;
    updateFruits();
}

function blendFruits() {
    if (strawberries >= 2 && blueberries >= 5 && cherries >= 3) {
        strawberries = strawberries - 2;
        blueberries = blueberries - 5;
        cherries = cherries - 3;
        updateFruits();

        smoothies = smoothies + 1;
        updateSmoothies();
    }
}

function sellSmoothie() {
    if (smoothies >= 1) {
        smoothies = smoothies - 1;
        updateSmoothies();

        money = money + 3;
        updateMoney();
    }
}

function hireStrawberryPicker() {
    strawberryPickers = strawberryPickers + 1;
    strawberryPickersDisplay.innerHTML = "Strawberry pickers: " + strawberryPickers;

    setInterval(workerPickStrawberry, 1000);
}

function hireBlueberryPicker() {
    blueberryPickers = blueberryPickers + 1;
    blueberryPickersDisplay.innerHTML = "Blueberry pickers: " + blueberryPickers;

    setInterval(workerPickBlueberry, 1000);
}

function hireCherryPicker() {
    cherryPickers = cherryPickers + 1;
    cherryPickersDisplay.innerHTML = "Cherry pickers: " + cherryPickers;

    setInterval(workerPickCherry, 1000);
}

function hireOperator() {
    operators = operators + 1;
    operatorsDisplay.innerHTML = "Blender operators: " + operators;

    setInterval(workerBlendFruits, 1000);
}

function hireCashier() {
    cashiers = cashiers + 1;
    cashiersDisplay.innerHTML = "Cashiers: " + cashiers;

    setInterval(workerSellSmoothie, 1000);
}

function workerPickStrawberry() {
    if (!strike) {
        if (money >= 0.1) {
            pickStrawberry();

            money = money - 0.1;
            updateMoney();
        }
        else {
            missedPaychecks = missedPaychecks + 1;
            updateMissedPaychecks();
        }
    }
}

function workerPickBlueberry() {
    if (!strike) {
        if (money >= 0.1) {
            pickBlueberry();

            money = money - 0.1;
            updateMoney();
        }
        else {
            missedPaychecks = missedPaychecks + 1;
            updateMissedPaychecks();
        }
    }
}

function workerPickCherry() {
    if (!strike) {
        if (money >= 0.1) {
            pickCherry();

            money = money - 0.1;
            updateMoney();
        }
        else {
            missedPaychecks = missedPaychecks + 1;
            updateMissedPaychecks();
        }
    }
}

function workerBlendFruits() {
    if (!strike) {
        if (money >= 0.9) {
            blendFruits();

            money = money - 0.9;
            updateMoney();
        }
        else {
            missedPaychecks = missedPaychecks + 1;
            updateMissedPaychecks();
        }
    }
}

function workerSellSmoothie() {
    if (!strike) {
        if (money >= 0.9) {
            sellSmoothie();

            money = money - 0.9;
            updateMoney();
        }
        else {
            missedPaychecks = missedPaychecks + 1;
            updateMissedPaychecks();
        }
    }
}

function updateFruits() {
    strawberriesDisplay.innerHTML = "Strawberries: " + strawberries;
    blueberriesDisplay.innerHTML = "Blueberries: " + blueberries;
    cherriesDisplay.innerHTML = "Cherries: " + cherries;

    if (strawberries >= 2 && blueberries >= 5 && cherries >= 3) {
        blender.style.opacity = "1";
    }
    else {
        blender.style.opacity = "0.5";
    }
}

function updateSmoothies() {
    smoothiesDisplay.innerHTML = "Smoothies: " + smoothies;

    if (smoothies >= 1) {
        smoothie.style.opacity = "1";
    }
    else {
        smoothie.style.opacity = "0.5";
    }
}

function updateMoney() {
    moneyDisplay.innerHTML = "Money: $" + money.toFixed(2);

    if (money >= 0.1) {
        moneyImage.style.opacity = "1";
    }
    else {
        moneyImage.style.opacity = "0.5";
    }

    if (money >= 0.1 & !strike) {
        hireStrawberryPickerButton.disabled = false;
        hireBlueberryPickerButton.disabled = false;
        hireCherryPickerButton.disabled = false;
        hireOperatorButton.disabled = false;
        hireCashierButton.disabled = false;
    }
    else {
        hireStrawberryPickerButton.disabled = true;
        hireBlueberryPickerButton.disabled = true;
        hireCherryPickerButton.disabled = true;
        hireOperatorButton.disabled = true;
        hireCashierButton.disabled = true;
    }
}

function updateMissedPaychecks() {
    missedPaychecksDisplay.innerHTML = "Missed paychecks: " + missedPaychecks;

    if (missedPaychecks >= 50) {
        strike = true;
        strikeMessage.style.display = "initial";

        hireStrawberryPickerButton.disabled = true;
        hireBlueberryPickerButton.disabled = true;
        hireCherryPickerButton.disabled = true;
        hireOperatorButton.disabled = true;
        hireCashierButton.disabled = true;
    }
}
