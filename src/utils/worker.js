self.addEventListener('message', async e => {
  const { prompt } = e.data

  try {
    // Отправляем запрос на сервер, где работает pipeline
    self.postMessage({ status: 'initiate' })
    const res = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    const data = await res.json()
    console.log(data)
    if (data.error) {
      self.postMessage({ status: 'error', error: data.error })
    } else {
      self.postMessage({ status: 'complete', output: data.text })
    }
  } catch (err) {
    self.postMessage({ status: 'error', error: err.message })
  }
})
