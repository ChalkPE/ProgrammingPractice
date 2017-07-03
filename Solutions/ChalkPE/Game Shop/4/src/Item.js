export default class Item {
  constructor (name, description, weight, value) {
    this.name = name
    this.description = description
    this.weight = weight
    this.value = value
  }

  describe () {
    console.log('Name        = %s', this.name)
    console.log('Description = %s', this.description)
    console.log('Weight      = %d lbs', this.weight)
    console.log('Value       = %d gold coins', this.value)
  }
}
