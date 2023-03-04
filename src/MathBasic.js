const MathBasic = {
  _validate (args) {
    if (args.length !== 2) {
      throw new Error('Fungsi hanya menerima 2 parameter')
    }

    const [a, b] = args
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi hanya menerima parameter number')
    }

    return args
  },
  add: (...args) => {
    const [a, b] = MathBasic._validate(args)
    return a + b
  },
  subtract: (...args) => {
    const [a, b] = MathBasic._validate(args)
    return a - b
  },
  multiply: (...args) => {
    const [a, b] = MathBasic._validate(args)
    return a * b
  },
  devide: (...args) => {
    const [a, b] = MathBasic._validate(args)
    return a / b
  }
}

module.exports = MathBasic
