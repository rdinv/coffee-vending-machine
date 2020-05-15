window.onload = function () {
    var mainScreen = document.getElementById("screen");
    mainScreen.innerHTML = ("Choose a drink");

    var latte = document.getElementById("latte");
    var capuchino = document.getElementById("capuchino");
    var americano = document.getElementById("americano");
    var chocolate = document.getElementById("chocolate");
    var tea = document.getElementById("tea");
    var espresso = document.getElementById("espresso");
    var mocha = document.getElementById("mocha");

    var moneyask = document.getElementById("cash");
    var ok = document.getElementById("ok");
    var cancel = document.getElementById("cancel");

    const changeAmount = document.querySelector('#change-amount');

    latte.addEventListener ("click", () => {pickDrink('latte')});
    capuchino.addEventListener ("click", () => {pickDrink('cappuchino')});
    americano.addEventListener ("click", () => {pickDrink('americano')});
    chocolate.addEventListener ("click", () => {pickDrink('chocolate')});
    tea.addEventListener ("click", () => {pickDrink('tea')});
    espresso.addEventListener ("click", () => {pickDrink('espresso')});
    mocha.addEventListener ("click", () => {pickDrink('mocha')});
    ok.addEventListener ("click", questionmoneyOk);

const prices = {
  latte: 25,
  cappuchino: 20,
  americano: 15,
  chocolate: 35,
  tea: 15,
  espresso: 23,
  mocha: 18
};

let chosen = null;

const print = s => {
  mainScreen.innerHTML = s;
};

document.getElementById('cancel').onclick = function(e) {
  document.getElementById('cash').value = "";
}

function pickDrink(drink) {
  if (!prices.hasOwnProperty(drink)) { 
    return print('You chose some bullshit. Please choose an existing drink');
  }
  chosen = drink;
  print(`You chose ${drink}. Insert ${prices[drink]}₴`);
}

function questionmoneyOk (){
  const insertedMoney = Number(moneyask.value);
  if (Number.isNaN(insertedMoney)) {
    return print('Insert a valid number, you moron');
  }
  if (insertedMoney < prices[chosen]) {
    return print (`${insertedMoney} is not enough. You need to pay ${prices[chosen]}`);
  }
  const change = insertedMoney - prices[chosen];
  changeAmount.innerText = change > 0 ? change : 'No change';
  print('Your drink is ready');
}
};