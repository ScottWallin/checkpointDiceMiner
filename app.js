let clickUpgrades = [
  {
    name: 'lucky dice',
    price: 30,
    quantity: 0,
    multiplier: 2,
    // isBought: false,
  },
  {
    name: 'dice box',
    price: 250,
    quantity: 0,
    multiplier: 10,
    // isBought: false,
  }
];

let automaticUpgrades = [
  {
    name: 'nat 20',
    price: 600,
    quantity: 0,
    multiplier: 20,
    isBought: false,
  },
  {
    name: 'dice tower',
    price: 2000,
    quantity: 0,
    multiplier: 100,
    isBought: false,
  }
];



let dice = 0
let diceStrength = 1
let autoStrength = 0

// SECTION MINING & ROLLS(MONEYS)
function roll() {
  let foundLuckyUpgrade = clickUpgrades.find(u => u.name == 'lucky dice')
  let foundBoxUpgrade = clickUpgrades.find(u => u.name == 'dice box')
  // increase dice count by 1
  dice++
  // @ts-ignore
  dice == (dice += (foundBoxUpgrade.multiplier * foundBoxUpgrade.quantity))
  // @ts-ignore
  dice == (dice += (foundLuckyUpgrade.multiplier * foundLuckyUpgrade.quantity))
  // alert(dice)
  console.log('dice')
  drawDice()
}



// SECTION BUYING CLICK UPGRADES
function buyClickUpgrade(name) {
  let buy = clickUpgrades.find(d => d.name == name)
  if (dice >= buy.price) {
    dice -= buy.price
    buy.quantity++
    buy.price += buy.price
    diceStrength += buy.multiplier
    buy.isBought = true
    console.log(buy)
    let diceClicker = document.getElementById('click-generation')
    diceClicker.innerText = diceStrength
  } else {
    window.alert('Keep rolling!')
  }
  drawLuckyUpgrade()
  drawBoxUpgrade()
}

function buyPassiveUpgrade(name) {
  let auto = automaticUpgrades.find(p => p.name == name)
  if (dice >= auto.price) {
    dice -= auto.price
    auto.quantity++
    auto.price += auto.price
    autoStrength += auto.multiplier
    auto.isBought = true
    console.log(auto)
    let diceAuto = document.getElementById('passive-generation')
    diceAuto.innerText = autoStrength
  } else {
    window.alert('Keep rolling!')
  }
  drawDiceTowerUpgrade()
  drawNat20Upgrade()
}



function collectAutoUpgrades() {
  let foundNatUpgrades = automaticUpgrades.find(u => u.name == 'nat 20')
  let foundTowerUpgrades = automaticUpgrades.find(u => u.name == 'dice tower')

  // if (automaticUpgrades.isBought)
  // console.log('interval works')
  // @ts-ignore
  dice += (foundNatUpgrades.quantity * foundNatUpgrades.multiplier)
  // @ts-ignore
  dice += (foundTowerUpgrades.quantity * foundTowerUpgrades.multiplier)
  // console.log('updating dice', dice)
  drawDice()

}

// SECTION DRAW FUNCTIONS

function drawDice() {
  // let foundLuckyUpgrade = clickUpgrades.find(u => u.name == 'lucky dice')
  // @ts-ignore
  document.getElementById("dice").innerText = dice
  // diceElem.innerText = dice.toString()
}
function drawLuckyUpgrade() {
  let foundUpgrades = clickUpgrades.find(u => u.name == 'lucky dice')
  // @ts-ignore
  document.getElementById("lucky dice").innerText = foundUpgrades.quantity
}
function drawBoxUpgrade() {
  let foundUpgrades = clickUpgrades.find(u => u.name == 'dice box')
  // @ts-ignore
  document.getElementById("dice box").innerText = foundUpgrades.quantity
}
function drawNat20Upgrade() {
  let foundUpgrades = automaticUpgrades.find(u => u.name == 'nat 20')
  // @ts-ignore
  document.getElementById("nat 20").innerText = foundUpgrades.quantity
}
function drawDiceTowerUpgrade() {
  let foundUpgrades = automaticUpgrades.find(u => u.name == 'dice tower')
  // @ts-ignore
  document.getElementById("dice tower").innerText = foundUpgrades.quantity
}
function clickGeneration() {
  let foundUpgradeLuckyDice = clickUpgrades.find(u => u.name == 'lucky dice')
  let foundUpgradeDiceBox = clickUpgrades.find(u => u.name == 'dice box')
  // @ts-ignore
  document.getElementById("click-generation").innerText = (diceStrength = ((foundUpgradeLuckyDice.quantity * foundUpgradeLuckyDice.multiplier)) + (foundUpgradeDiceBox.quantity * foundUpgradeDiceBox.multiplier))

}

// SECTION INTERVAL FOR AUTOMATIC UPGRADES
setInterval(collectAutoUpgrades, 3000)

// SECTION DRAW FUNCTIONS ON OPENING

// drawClickUpgrade()
// drawBoxUpgrade()
// drawLuckyUpgrade()
drawDice()