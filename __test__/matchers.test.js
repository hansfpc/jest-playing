describe('Comparadores comunes', () => {
  const user = {
    name: 'oscar',
    lastname: 'barajas',
  }
  const user2 = {
    name: 'oscar',
    lastname: 'barajas',
  }
  const user3 = {
    name: 'asdad',
    lastname: 'dsadsdsa',
  }
  test('igualdad de elementos', () => {
    expect(user).toEqual(user2)
  })
  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user3)
  })
})
