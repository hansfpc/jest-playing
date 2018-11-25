import { text } from '../strings'

describe('Comprobaremos que existe un elemento', () => {
  test('El texto incluye tal texto', () => {
    expect(text).toMatch(/perfect/)
  })
  test('No debe contener tal texto', () => {
    expect(text).not.toMatch(/stuff/)
  })
})
