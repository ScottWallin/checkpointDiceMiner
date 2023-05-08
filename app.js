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
  // @ts-ignore
  if (dice >= buy.price) {
    // @ts-ignore
    dice -= buy.price
    // @ts-ignore
    buy.quantity++
    // @ts-ignore
    buy.price += buy.price
    // @ts-ignore
    diceStrength += buy.multiplier
    // @ts-ignore
    buy.isBought = true
    console.log(buy)
    let diceClicker = document.getElementById('click-generation')
    // @ts-ignore
    diceClicker.innerText = diceStrength
    let upgradeClickPrice = document.getElementById(name)
    // @ts-ignore
    upgradeClickPrice.innerText = buy.price

  } else {
    window.alert('Keep rolling!')
  }
  // drawLuckyUpgrade()
  drawLuckyBonus()
  populateLuckyBonus()
  drawBoxBonus()
  populateBoxBonus()
  // drawBoxUpgrade()
}

function buyPassiveUpgrade(name) {
  let auto = automaticUpgrades.find(p => p.name == name)
  // @ts-ignore
  if (dice >= auto.price) {
    // @ts-ignore
    dice -= auto.price
    // @ts-ignore
    auto.quantity++
    // @ts-ignore
    auto.price += auto.price
    // @ts-ignore
    autoStrength += auto.multiplier
    // @ts-ignore
    auto.isBought = true
    console.log(auto)
    let diceAuto = document.getElementById('passive-generation')
    // @ts-ignore
    diceAuto.innerText = autoStrength
    let autoPrice = document.getElementById(name)
    // @ts-ignore
    autoPrice.innerText = auto.price
  } else {
    window.alert('Keep rolling!')
  }
  // drawDiceTowerUpgrade()
  drawTowerBonus()
  // drawNat20Upgrade()
  drawNat20Bonus()
  populateNat20()
  populateTower()
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
// SECTION CLICK FUNCTIONS
// function drawLuckyUpgrade() {
//   let foundUpgrades = clickUpgrades.find(u => u.name == 'lucky dice')
//   // @ts-ignore
//   document.getElementById("lucky dice").innerText = foundUpgrades.quantity
// }
function drawLuckyBonus() {
  let luckyBonus = clickUpgrades.find(l => l.name == 'lucky dice')
  // @ts-ignore
  document.getElementById("lucky-bonus").innerText = (luckyBonus.multiplier * luckyBonus.quantity)
}
function populateLuckyBonus() {
  let lucky = clickUpgrades.find(c => c.name == 'lucky dice')
  let luckyMult = document.getElementById('lucky-mult')
  luckyMult.innerText = lucky.quantity * lucky.multiplier
  let luckyBought = document.getElementById('lucky-bonus')
  luckyBought.innerText = lucky.quantity

}
// function drawBoxUpgrade() {
//   let foundUpgrades = clickUpgrades.find(u => u.name == 'dice box')
//   // @ts-ignore
//   document.getElementById("dice box").innerText = foundUpgrades.quantity
// }
function drawBoxBonus() {
  let boxBonus = clickUpgrades.find(b => b.name == 'dice box')
  // @ts-ignore
  document.getElementById("box-bonus").innerText = (boxBonus.multiplier * boxBonus.quantity)
}
function populateBoxBonus() {
  let box = clickUpgrades.find(b => b.name == 'dice box')
  let boxMult = document.getElementById('box-mult')
  boxMult.innerText = box.quantity * box.multiplier
  let boxBought = document.getElementById('box-bonus')
  boxBought.innerText = box.quantity
}

function clickGeneration() {
  let foundUpgradeLuckyDice = clickUpgrades.find(u => u.name == 'lucky dice')
  let foundUpgradeDiceBox = clickUpgrades.find(u => u.name == 'dice box')
  // @ts-ignore
  document.getElementById("click-generation").innerText = (diceStrength = ((foundUpgradeLuckyDice.quantity * foundUpgradeLuckyDice.multiplier)) + (foundUpgradeDiceBox.quantity * foundUpgradeDiceBox.multiplier))

}
// SECTION PASSIVE FUNCTIONS
// function drawNat20Upgrade() {
//   let foundUpgrades = automaticUpgrades.find(u => u.name == 'nat 20')
//   // @ts-ignore
//   document.getElementById("nat 20").innerText = foundUpgrades.quantity
// }
function drawNat20Bonus() {
  let natBonus = automaticUpgrades.find(n => n.name == 'nat 20')
  // @ts-ignore
  document.getElementById("nat-20-bonus").innerText = (natBonus.multiplier * natBonus.quantity)
}
function populateNat20() {
  let natural = automaticUpgrades.find(n => n.name == 'nat 20')
  let naturalMult = document.getElementById('nat-mult')
  naturalMult.innerText = natural.quantity * natural.multiplier
  let natBought = document.getElementById('nat-20-bonus')
  natBought.innerText = natural.quantity
}
function populateTower() {
  let tower = automaticUpgrades.find(t => t.name == 'dice tower')
  let towerMult = document.getElementById('tower-mult')
  towerMult.innerText = tower.quantity * tower.multiplier
  let towerBought = document.getElementById('tower-bonus')
  towerBought.innerText = tower.quantity
}

// function drawDiceTowerUpgrade() {
//   let foundUpgrades = automaticUpgrades.find(u => u.name == 'dice tower')
//   // @ts-ignore
//   document.getElementById("dice tower").innerText = foundUpgrades.quantity
// }
function drawTowerBonus() {
  let towerUpgrade = automaticUpgrades.find(t => t.name == 'dice tower')
  // @ts-ignore
  document.getElementById("tower-bonus").innerText = (towerUpgrade.multiplier * towerUpgrade.quantity)
}

// SECTION INTERVAL FOR AUTOMATIC UPGRADES
setInterval(collectAutoUpgrades, 3000)

// SECTION DRAW FUNCTIONS ON OPENING

// drawClickUpgrade()
// drawBoxUpgrade()
// drawLuckyUpgrade()
drawTowerBonus()
drawNat20Bonus()
drawBoxBonus()
drawLuckyBonus()
drawDice()