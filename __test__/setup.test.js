afterEach(() => console.log('after each one'))
afterAll(() => console.log('_____________after ALL tests _______________'))

beforeEach(() => console.log('before each one'))
beforeAll(() => console.log('_____________before ALL tests _______________'))

describe('preparar antes de ejecutar', () => {
  test('es verdadero (hooks)', () => {
    expect(true).toBeTruthy()
  })
})
