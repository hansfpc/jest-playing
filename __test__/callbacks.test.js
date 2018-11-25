import { callbackHell } from '../callbacks'

describe('Probando un callback :o', () => {
  test('Callback :)', done => {
    function otherCallback(data) {
      expect(data).toBe('Hello, JS people!')
      done()
    }
    callbackHell(otherCallback)
  })
})
