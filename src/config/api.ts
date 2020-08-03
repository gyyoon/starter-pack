const hostDevelopment = 'localhost:3001' as const
const hostProduction = 'localhost:3001' as const

const host = process.env.NODE_ENV === 'development' ? hostDevelopment : hostProduction

const API = {
  server: {
    protocol: 'https://',
    host,
  },
  user: {
    vod: 'vod',
  },
}
export default API
