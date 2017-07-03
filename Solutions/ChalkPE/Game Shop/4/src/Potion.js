import Item from './Item'

export default class Potion extends Item {
  constructor (name, description, weight, value, type, capacity) {
    super(name, description, weight, value)
    this.type = type
    this.capacity = capacity
  }

  describe () {
    super.describe()
    console.log('Type        = %s', this.type)
    console.log('Capacity    = %d', this.capacity)
  }
}
