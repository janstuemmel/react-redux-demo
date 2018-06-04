export const login = (username, password) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (username === 'foo' && password === 'bar') {
        return res('t0k3n')
      }
      return rej(new Error('wrong credentials'))
    }, 500)
  })
}
