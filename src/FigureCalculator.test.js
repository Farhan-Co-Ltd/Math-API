const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, calculateTriangleArea', () => {
    const figureCalculator = new FigureCalculator({})

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter')
    expect(figureCalculator).toHaveProperty('calculateRectangleArea')
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
    expect(figureCalculator).toHaveProperty('calculateTriangleArea')
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function)
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function)
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function)
  })

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError()
    })
    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '1')).toThrowError()
      expect(() => figureCalculator.calculateRectanglePerimeter([], false)).toThrowError()
    })

    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const length = 20
      const width = 10
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width)

      // Asert
      expect(result).toEqual(60) // hasil dari 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width) // (20 + 10)
      expect(spyMultiply).toHaveBeenCalledWith(2, 30) // 2 * 30
    })
  })

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError()
      expect(() => figureCalculator.calculateRectangleArea([], false)).toThrowError()
    })

    it('should return correct value based on rectangle area formula', () => {
      const length = 20
      const width = 10
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateRectangleArea(length, width)

      expect(result).toEqual(200)
      expect(spyMultiply).toHaveBeenCalledWith(length, width)
    })
  })

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 paramters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, [])).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter(null, '3', false)).toThrowError()
      expect(() => figureCalculator.calculateTrianglePerimeter([], false, true)).toThrowError()
    })

    it('should return correct value based on triangle perimeter formula', () => {
      const sideA = 30
      const sideB = 30
      const base = 20
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base)

      expect(result).toEqual(80)
      expect(spyAdd).toHaveBeenCalledWith(sideA, sideB)
      expect(spyAdd).toHaveBeenCalledWith(base, 60)
    })
  })

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 paramters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError()
    })

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({})

      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea(null, '4')).toThrowError()
      expect(() => figureCalculator.calculateTriangleArea([], false)).toThrowError()
    })

    it('should return correct value based on triangle area formula', () => {
      const base = 20
      const height = 25
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const spyDevide = jest.spyOn(MathBasic, 'devide')
      const figureCalculator = new FigureCalculator(MathBasic)

      const result = figureCalculator.calculateTriangleArea(base, height)

      expect(result).toEqual(250)
      expect(spyMultiply).toHaveBeenCalledWith(base, height)
      expect(spyDevide).toHaveBeenCalledWith(500, 2)
    })
  })
})
