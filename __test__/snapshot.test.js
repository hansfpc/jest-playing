import { getCharacter } from '../snapshot'
import rick from '../rick'

describe('Probando con Snapshots!', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  })
  test('Siempre fallará el snapshot', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'Hans',
    }
    expect(user).toMatchSnapshot(
      /*Si no pongo este objeto, FALLARÁ */
      {
        id: expect.any(Number),
        createAt: expect.any(Date),
      }
    )
  })
  test('Tenemos una excepsion dentro del codigo', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Hans Felipe',
      createAt: new Date(),
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
      createAt: expect.any(Date),
    })
  })
})
