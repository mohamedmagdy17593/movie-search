import ky from 'ky'

const baseUrl = 'http://api.themoviedb.org/3'
const apiKey = '1065d496da00aced5bfcf17d888dde92'

function search({movieName}) {
  return ky
    .get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${movieName}`)
    .json()
}

export {search}
