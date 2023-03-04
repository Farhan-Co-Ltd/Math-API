const MathBasic = require('./MathBasic')

describe('MathBasic', () => {
  it('should contains add, subtract, multiply, and devide function', () => {
    expect(MathBasic).toHaveProperty('add')
    expect(MathBasic).toHaveProperty('subtract')
    expect(MathBasic).toHaveProperty('multiply')
    expect(MathBasic).toHaveProperty('devide')
    expect(MathBasic.add).toBeInstanceOf(Function)
    expect(MathBasic.subtract).toBeInstanceOf(Function)
    expect(MathBasic.multiply).toBeInstanceOf(Function)
    expect(MathBasic.devide).toBeInstanceOf(Function)
  })

  describe('A add function', () => {
    it('should throw new error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError()
      expect(() => MathBasic.add(1)).toThrowError()
      expect(() => MathBasic.add(1, 2, 3)).toThrowError()
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError()
    })
    it('should throw new error when given non-number paramters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError()
      expect(() => MathBasic.add(true, {})).toThrowError()
      expect(() => MathBasic.add(null, false)).toThrowError()
    })
    it('should return a + b when given 2 number parameters', () => {
      expect(MathBasic.add(3, 3)).toEqual(6)
      expect(MathBasic.add(6, 3)).toEqual(9)
      expect(MathBasic.add(3, 6)).toEqual(9)
    })
  })

  describe('A subtract function', () => {
    it('should throw new error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError()
      expect(() => MathBasic.subtract(1)).toThrowError()
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError()
      expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError()
    })
    it('should throw new error when given non-number parameters', () => {
      expect(() => MathBasic.subtract('1', '2')).toThrowError()
      expect(() => MathBasic.subtract(true, {})).toThrowError()
      expect(() => MathBasic.subtract(null, false)).toThrowError()
    })
    it('should return a - b when given 2 number paramters', () => {
      expect(MathBasic.subtract(4, 4)).toEqual(0)
      expect(MathBasic.subtract(8, 4)).toEqual(4)
      expect(MathBasic.subtract(4, 8)).toEqual(-4)
    })
  })

  describe('A multiply function', () => {
    it('should throw new error when not given 2 paramters', () => {
      expect(() => MathBasic.multiply()).toThrowError()
      expect(() => MathBasic.multiply(1)).toThrowError()
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError()
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError()
    })
    it('should throw new error when given non-number parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrowError()
      expect(() => MathBasic.multiply(true, {})).toThrowError()
      expect(() => MathBasic.multiply(null, false)).toThrowError()
    })
    it('should return a * b when given 2 number parameters', () => {
      expect(MathBasic.multiply(5, 5)).toEqual(25)
      expect(MathBasic.multiply(25, 5)).toEqual(125)
      expect(MathBasic.multiply(5, 25)).toEqual(125)
    })
  })

  describe('A devide function', () => {
    it('should throw new error when not given 2 paramters', () => {
      expect(() => MathBasic.devide()).toThrowError()
      expect(() => MathBasic.devide(1)).toThrowError()
      expect(() => MathBasic.devide(1, 2, 3)).toThrowError()
      expect(() => MathBasic.devide(1, 2, 3, 4)).toThrowError()
    })
    it('should throw new error when given non-number parameters', () => {
      expect(() => MathBasic.devide('1', '2')).toThrowError()
      expect(() => MathBasic.devide(true, {})).toThrowError()
      expect(() => MathBasic.devide(null, false)).toThrowError()
    })
    it('should return a / b when given 2 number parameters', () => {
      expect(MathBasic.devide(6, 6)).toEqual(1)
      expect(MathBasic.devide(12, 6)).toEqual(2)
      expect(MathBasic.devide(6, 12)).toEqual(0.5)
    })
  })
})
