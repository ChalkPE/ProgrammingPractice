import Item from './Item'

export default class Weapon extends Item {
  constructor (name, description, weight, value, damage) {
    super(name, description, weight, value)
    this.damage = damage
  }

  describe () {
    super.describe()
    console.log('Damage      = %d', this.damage)
  }
}
