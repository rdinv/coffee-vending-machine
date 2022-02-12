window.onload = function () {
  let mainScreen = document.getElementById("screen");
  mainScreen.innerHTML = "Choose a drink";

  let latte = document.getElementById("latte");
  let capuchino = document.getElementById("capuchino");
  let americano = document.getElementById("americano");
  let chocolate = document.getElementById("chocolate");
  let tea = document.getElementById("tea");
  let espresso = document.getElementById("espresso");
  let mocha = document.getElementById("mocha");

  let moneyask = document.getElementById("cash");
  let ok = document.getElementById("ok");
  let cancel = document.getElementById("cancel");

  const changeAmount = document.querySelector("#change-amount");

  latte.addEventListener("click", () => {
    pickDrink("latte");
  });
  capuchino.addEventListener("click", () => {
    pickDrink("cappuchino");
  });
  americano.addEventListener("click", () => {
    pickDrink("americano");
  });
  chocolate.addEventListener("click", () => {
    pickDrink("hot chocolate");
  });
  tea.addEventListener("click", () => {
    pickDrink("tea");
  });
  espresso.addEventListener("click", () => {
    pickDrink("espresso");
  });
  mocha.addEventListener("click", () => {
    pickDrink("mocha");
  });
  ok.addEventListener("click", questionmoneyOk);

  const prices = {
    latte: 25,
    cappuchino: 20,
    americano: 15,
    chocolate: 35,
    tea: 15,
    espresso: 23,
    mocha: 18,
  };

  let chosen = null;

  const print = (s) => {
    mainScreen.innerHTML = s;
  };

  document.getElementById("cancel").onclick = function (e) {
    document.getElementById("cash").value = "";
  };

  function pickDrink(drink) {
    if (!prices.hasOwnProperty(drink)) {
      return print("You chose some bullshit. Please choose an existing drink");
    }
    chosen = drink;
    print(`You chose ${drink}. Insert ${prices[drink]}₴`);
  }

  function questionmoneyOk() {
    const insertedMoney = Number(moneyask.value);
    if (Number.isNaN(insertedMoney)) {
      return print("Insert a valid number, you moron");
    }
    if (insertedMoney < prices[chosen]) {
      return print(
        `${insertedMoney}₴ is not enough. You need to pay ${prices[chosen]}₴`
      );
    }
    const change = insertedMoney - prices[chosen];
    changeAmount.innerText = change > 0 ? change + '₴' : "No change";
    print("Your drink is ready");
  }
};