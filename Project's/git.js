const requestURL = 'https://github.com/Ilya-Lubimov?tab=repositories'

function sendRequest(method, url, body = null) {
  const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))



sendRequest('POST', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))