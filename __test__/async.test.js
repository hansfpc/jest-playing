import { getDataFromAPI } from '../promises'

describe('Probar Async/Await', () => {
  test('Realizar una petición a una API', async () => {
    const api = 'https://rickandmortyapi.com/api/character/'
    const getRick = 'https://rickandmortyapi.com/api/character/1'

    const data = await getDataFromAPI(api)
    expect(data.results.length).toBeGreaterThanOrEqual(0)

    const data2 = await getDataFromAPI(getRick)
    expect(data2.name).toEqual('Rick Sanchez')
  })

  test('Realizando una peticion a una api con error', async () => {
    const apiError = 'http://httpstat.us/500'
    const peticion = getDataFromAPI(apiError)
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 500'))
  })

  test('Resuelve un Hola', async () => {
    await expect(Promise.resolve('Hola')).resolves.toBe('Hola')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})
