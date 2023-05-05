let clickUpgrades = [
  {
    name: 'lucky dice',
    price: 50,
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
    multiplier: 40,
    isBought: false,
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
  // @ts-ignore
  if (dice >= foundLuckyUpgrade.price) {
    // @ts-ignore
    dice -= foundLuckyUpgrade.price
    // @ts-ignore
    foundLuckyUpgrade.isBought = true
    // @ts-ignore
    foundLuckyUpgrade.quantity++
    console.log(foundLuckyUpgrade)
  } else {
    window.alert('Keep rolling!')
  }
  drawLuckyUpgrade()
  // console.log('purchased')
}
function buyDiceBox() {
  let foundBoxUpgrade = clickUpgrades.find(u => u.name == 'dice box')
  // @ts-ignore
  if (dice >= foundBoxUpgrade.price) {
    // @ts-ignore
    dice -= foundBoxUpgrade.price
    // @ts-ignore
    foundBoxUpgrade.isBought = true
    // @ts-ignore
    foundBoxUpgrade.quantity++
    console.log(foundBoxUpgrade)
  } else {
    window.alert('Keep rolling!')
  }
  // @ts-ignore
  drawBoxUpgrade()
}

// SECTION BUYING PASSIVE UPGRADES

function buyNat20() {
  let foundNat20Upgrade = automaticUpgrades.find(u => u.name == 'nat 20')
  // @ts-ignore
  if (dice >= foundNat20Upgrade.price) {
    // @ts-ignore
    dice -= foundNat20Upgrade.price
    // @ts-ignore
    foundNat20Upgrade.isBought = true
    // @ts-ignore
    foundNat20Upgrade.quantity++
    console.log(foundNat20Upgrade)
  } else {
    window.alert('Keep rolling!')
  }
  drawNat20Upgrade()
}
function buyDiceTower() {
  let foundDiceTowerUpgrade = automaticUpgrades.find(u => u.name == 'dice tower')
  // @ts-ignore
  if (dice >= foundDiceTowerUpgrade.price) {
    // @ts-ignore
    dice -= foundDiceTowerUpgrade.price
    // @ts-ignore
    foundDiceTowerUpgrade.isBought = true
    // @ts-ignore
    foundDiceTowerUpgrade.quantity++
    console.log(foundDiceTowerUpgrade)
  } else {
    window.alert('Keep rolling!')
  }
  drawDiceTowerUpgrade()
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
  document.getElementById("lucky dice").innerText = foundUpgrades.quantity
}
function drawBoxUpgrade() {
  let foundUpgrades = clickUpgrades.find(u => u.name == 'dice box')
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

// SECTION INTERVAL FOR AUTOMATIC UPGRADES
setInterval(collectAutoUpgrades, 3000)

// SECTION DRAW FUNCTIONS ON OPENING
drawNat20Upgrade()
drawDiceTowerUpgrade()
drawBoxUpgrade()
drawLuckyUpgrade()
drawDice()