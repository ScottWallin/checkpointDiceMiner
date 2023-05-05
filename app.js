let clickUpgrades = [
  {
    name: 'lucky dice',
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'dice box',
    price: 400,
    quantity: 0,
    multiplier: 10,
  }
];

let automaticUpgrades = [
  {
    name: 'nat 20',
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  // {
  //   name: 'dice tower',
  //   price: 2000,
  //   quantity: 0,
  //   multiplier: 40
  // }
];



let dice = 0





// SECTION MINING
function mine() {
  // increase dice count by 1
  dice++
  // alert(dice)
  console.log('dice')
  drawDice()
}

// SECTION BUYING UPGRADES
function buyLuckyDice() {
  let foundLuckyUpgrade = clickUpgrades.find(u => u.name == 'lucky dice')
  console.log(foundLuckyUpgrade)
  // @ts-ignore
  foundLuckyUpgrade.quantity++
  drawLuckyUpgrade()
  console.log('purchased')
}
function buyDiceBox() {
  let foundBoxUpgrade = clickUpgrades.find(u => u.name == 'dice box')
  console.log(foundBoxUpgrade)
  foundBoxUpgrade.quantity++
  drawBoxUpgrade()
}

function drawDice() {
  // @ts-ignore
  document.getElementById("dice").innerText = dice
  // diceElem.innerText = dice.toString()
}
function drawLuckyUpgrade() {
  let foundUpgrades = clickUpgrades.find(u => u.name == 'lucky dice')
  document.getElementById("lucky dice").innerText = foundUpgrades.quantity
}
function drawBoxUpgrade() {
  let foundUpgrades = clickUpgrades.find(u => u.name == 'dice box')
  document.getElementById("dice box").innerText = foundUpgrades.quantity
}
drawBoxUpgrade
drawLuckyUpgrade()
drawDice()