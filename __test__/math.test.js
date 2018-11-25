import { sumar, multiplicar, restar, dividir } from '../math.js'

describe('Cálculos matemáticos', () => {
  test('Prueba de Sumar', () => {
    expect(sumar(1, 1)).toBe(2)
  })
  test('Prueba de Multiplicar ', () => {
    expect(multiplicar(2, 2)).toBe(4)
  })
  test('Prueba de restar ', () => {
    expect(restar(2, 2)).toBe(0)
  })
  test('Prueba de Dividir ', () => {
    expect(dividir(10, 2)).toBe(5)
  })
})
