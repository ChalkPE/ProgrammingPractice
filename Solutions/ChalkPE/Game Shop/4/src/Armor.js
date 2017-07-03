import Item from './Item'

export default class Armor extends Item {
  constructor (name, description, weight, value, defense) {
    super(name, description, weight, value)
    this.defense = defense
  }

  describe () {
    super.describe()
    console.log('Defense     = %d', this.defense)
  }
}
