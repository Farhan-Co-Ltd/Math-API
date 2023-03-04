const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi Add hanya menerima 2 parameter')
    }

    const [a, b] = args

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number')
    }

    return a + b
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi Subtract hanya menerima 2 parameter')
    }

    const [a, b] = args

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number')
    }

    return a - b
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi hanya menerima 2 parameters')
    }

    const [a, b] = args

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number')
    }

    return a * b
  },
  devide: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi hanya menerima 2 paramter')
    }

    const [a, b] = args

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima paramter number')
    }

    return a / b
  }
}

module.exports = MathBasic
