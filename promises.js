import axios from 'axios'

export const getDataFromAPI = url => {
  return axios.get(url).then(({ data }) => {
    return data
  })
}
