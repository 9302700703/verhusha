const pathPrefix = 'Transport/'

export const request = async (path, body) => {
  const t = await fetch(
    pathPrefix + path,
    {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include'
    }
  ).then(r => r.json())
  return t
}

export const login = (name, password) => request('login/login', { name, password })
  .then(r => {
    r.status && Object.keys(r).forEach(key => document.cookie = `${key}=${r[key]}`)
    return r
  })