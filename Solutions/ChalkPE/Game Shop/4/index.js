import Shop from './src/Shop'

const shops = [
  new Shop('Weapon/Armor', 'assets/equip_item.txt'),
  new Shop('Potion', 'assets/potion_item.txt')
]

async function readDataFromFile () {
  await Promise.all(shops.map(shop => shop.readDataFromFile()))
}

readDataFromFile()
  .then(() => shops.forEach(shop => shop.showItemList()))
  .catch(console.error)
