import { getDataFromAPI } from '../promises'

describe('Probando promesas', () => {
  test('Realizando una peticion a una api', done => {
    const URL = 'https://rickandmortyapi.com/api/character/'
    getDataFromAPI(URL).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
      done()
    })
  })

  test('Resuelve un Hola!', () => {
    return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!')
  })

  test('Rechaza con un error', () => {
    return expect(Promise.reject('Errror')).rejects.toBe('Errror')
  })

  test('Rechaza con un error (throw)', () => {
    return expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error')
  })
})
