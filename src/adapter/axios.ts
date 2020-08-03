import axios from 'axios'

import API from '~/config/api'

const axiosClient = axios.create({
  baseURL: `${API.server.protocol}${API.server.host}/`,
})

axiosClient.interceptors.request.use(
  (config) => {
    // TODO: change to JWT token auth
    const token = window && localStorage.getItem('auth')
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
      return config
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// API endpoint list
export { API }

// axios client
export default axiosClient
