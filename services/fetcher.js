const BASE_URI = 'http://localhost:3000/api'

const fetcher = async path => {
  const res = await fetch(`${BASE_URI}${path}`)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return {...data, statusCode: res.status}
}

export default fetcher