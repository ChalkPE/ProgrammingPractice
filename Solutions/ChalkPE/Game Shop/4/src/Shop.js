import { createReadStream } from 'fs'
import { createInterface } from 'readline'

import Armor from './Armor'
import Weapon from './Weapon'
import Potion from './Potion'

const types = { Armor, Weapon, Potion }

export default class Shop {
  constructor (name, fileName) {
    this.name = name
    this.fileName = fileName

    this.items = []
    this.stream = createReadStream(fileName)
  }

  showItemList () {
    console.log('- Item List -')
    this.items.forEach(item => item.describe() || console.log())
  }

  readDataFromFile () {
    return new Promise((resolve, reject) => {
      const rl = createInterface({ input: this.stream })

      rl.on('close', resolve)
        .on('line', line => {
          /* eslint-disable no-eval */
          const [type, ...args] = line.split(', ').map(eval)

          if (types[type]) {
            return this.items.push(new types[type](...args))
          }

          rl.removeListener('close', resolve)
            .on('close', () => reject(new Error(`Invalid type ${type}`)))
            .close()
        })
    })
  }
}
