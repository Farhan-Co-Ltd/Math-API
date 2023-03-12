const createServer = require('./createServer')
const MathBasic = require('./MathBasic')
const FigureCalculator = require('./FigureCalculator')

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
    // Arange
      const a = 10
      const b = 20
      const spyAdd = jest.spyOn(MathBasic, 'add')
      const server = createServer({ mathBasic: MathBasic })

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`
      })

      // Assert
      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(30)
      expect(spyAdd).toBeCalledWith(a, b)
    })
  })

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      const a = 30
      const b = 20
      const spySubtract = jest.spyOn(MathBasic, 'subtract')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(10)
      expect(spySubtract).toBeCalledWith(a, b)
    })
  })

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      const a = 3
      const b = 4
      const spyMultiply = jest.spyOn(MathBasic, 'multiply')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(12)
      expect(spyMultiply).toBeCalledWith(a, b)
    })
  })

  describe('when GET /devide', () => {
    it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
      const a = 6
      const b = 3
      const spyDevide = jest.spyOn(MathBasic, 'devide')
      const server = createServer({ mathBasic: MathBasic })

      const response = await server.inject({
        method: 'GET',
        url: `/devide/${a}/${b}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(2)
      expect(spyDevide).toBeCalledWith(a, b)
    })
  })

  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the perimeter of the rectangle correctly', async () => {
      const length = 20
      const width = 10
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter')
      const server = createServer({ figureCalculator })

      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(60) // 2 * (length + width)
      expect(spyRectanglePerimeter).toBeCalledWith(length, width)
    })
  })

  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the area of the rectangle correctly', async () => {
      const length = 20
      const width = 10
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea')
      const server = createServer({ figureCalculator })

      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(200)
      expect(spyRectangleArea).toBeCalledWith(length, width)
    })
  })

  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the perimeter of the triangle correctly', async () => {
      const sideA = 20
      const sideB = 20
      const base = 20
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter')
      const server = createServer({ figureCalculator })

      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(60)
      expect(spyTrianglePerimeter).toBeCalledWith(sideA, sideB, base)
    })
  })

  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is the result of calculating the area of the triangle correctly', async () => {
      const base = 30
      const height = 4
      const figureCalculator = new FigureCalculator(MathBasic)
      const spyTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea')
      const server = createServer({ figureCalculator })

      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`
      })

      const responseJson = JSON.parse(response.payload)
      expect(response.statusCode).toEqual(200)
      expect(responseJson.value).toEqual(60) // (base * height) / 2
      expect(spyTriangleArea).toBeCalledWith(base, height)
    })
  })
})
