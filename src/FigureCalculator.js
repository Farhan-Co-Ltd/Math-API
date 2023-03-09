class FigureCalculator {
  constructor (mathBasic) {
    this._mathBasic = mathBasic
  }

  _verify (args, expect) {
    if (args.length !== expect) {
      throw new Error(`Fungsi hanya menerima ${expect} parameter`)
    }

    args.forEach((args) => {
      if (typeof args !== 'number') {
        throw new Error('Fungsi hanya menerima parameter number')
      }
    })

    return args
  }

  calculateRectanglePerimeter (...args) {
    const [length, width] = this._verify(args, 2)

    // formula = (2 * (length + width))
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width))
  }

  calculateRectangleArea (...args) {
    const [length, width] = this._verify(args, 2)

    return this._mathBasic.multiply(length, width)
  }

  calculateTrianglePerimeter (...args) {
    const [sideA, sideB, base] = this._verify(args, 3)

    return this._mathBasic.add(base, this._mathBasic.add(sideA, sideB))
  }

  calculateTriangleArea (...args) {
    const [base, height] = this._verify(args, 2)

    return this._mathBasic.devide(this._mathBasic.multiply(base, height), 2)
  }
}

module.exports = FigureCalculator
