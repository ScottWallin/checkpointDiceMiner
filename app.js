let clickUpgrades = [
  {
    name: 'lucky dice',
    price: 100,
    quantity: 0,
    multiplier: 1,
    isBought: false,
  },
  {
    name: 'dice box',
    price: 400,
    quantity: 0,
    multiplier: 10,
    isBought: false,
  }
];

let automaticUpgrades = [
  {
    name: 'nat 20',
    price: 600,
    quantity: 0,
    multiplier: 20,
    isBought: true,
  },
  {
    name: 'dice tower',
    price: 2000,
    quantity: 0,
    multiplier: 40,
    isBought: true,
  }
];



let dice = 0
// let diceStrength = 0



// dice = (dice.quantity + (upgradeQuantity * upgradeMultiplier))

// SECTION MINING & ROLLS(MONEYS)
function roll() {
  let foundLuckyUpgrade = clickUpgrades.find(u => u.name == 'lucky dice')
  let foundBoxUpgrade = clickUpgrades.find(u => u.name == 'dice box')
  // increase dice count by 1
  dice++
  dice == (dice += (foundBoxUpgrade.multiplier * foundBoxUpgrade.quantity))
  dice == (dice += (foundLuckyUpgrade.multiplier * foundLuckyUpgrade.quantity))
  // alert(dice)
  console.log('dice')
  drawDice()
}



// SECTION BUYING CLICK UPGRADES
function buyLuckyDice() {
  let foundLuckyUpgrade = clickUpgrades.find(u => u.name == 'lucky dice')
  console.log(foundLuckyUpgrade)
  // @ts-ignore
  foundLuckyUpgrade.quantity++
  drawLuckyUpgrade()
  // console.log('purchased')
}
function buyDiceBox() {
  let foundBoxUpgrade = clickUpgrades.find(u => u.name == 'dice box')
  console.log(foundBoxUpgrade)
  foundBoxUpgrade.quantity++
  drawBoxUpgrade()
}

// SECTION BUYING PASSIVE UPGRADES

function buyNat20() {
  let foundNat20Upgrade = automaticUpgrades.find(u => u.name == 'nat 20')
  foundNat20Upgrade.quantity++
  // console.log(foundNat20Upgrade)
  drawNat20Upgrade()
}
function buyDiceTower() {
  let foundDiceTowerUpgrade = automaticUpgrades.find(u => u.name == 'dice tower')
  foundDiceTowerUpgrade.quantity++
  // console.log(foundDiceTowerUpgrade)
  drawDiceTowerUpgrade()
}

// function collectAutoUpgrades() {
//   let foundUpgrades = automaticUpgrades.find(u => u.name == 'nat 20')

//   // if (automaticUpgrades.isBought)
//   // console.log('interval works')
//   dice += (dice + (automaticUpgrades.quantity *= automaticUpgrades.multiplier))
//   drawDice()

// }

// SECTION DRAW FUNCTIONS

function drawDice() {
  // let foundLuckyUpgrade = clickUpgrades.find(u => u.name == 'lucky dice')
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
function drawNat20Upgrade() {
  let foundUpgrades = automaticUpgrades.find(u => u.name == 'nat 20')
  document.getElementById("nat 20").innerText = foundUpgrades.quantity
}
function drawDiceTowerUpgrade() {
  let foundUpgrades = automaticUpgrades.find(u => u.name == 'dice tower')
  document.getElementById("dice tower").innerText = foundUpgrades.quantity
}

// SECTION INTERVAL FOR AUTOMATIC UPGRADES
setInterval(collectAutoUpgrades, 3000)

// SECTION DRAW FUNCTIONS ON OPENING
drawNat20Upgrade()
drawDiceTowerUpgrade()
drawBoxUpgrade()
drawLuckyUpgrade()
drawDice()