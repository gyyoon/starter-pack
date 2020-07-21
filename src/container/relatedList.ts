import axios from 'axios'

export interface ICatResponse {
  breeds: Array<string>
  categories?: Array<{ id: number; name: string }>
  height: number
  id: string
  url: string
  width: number
}

const getRelatedList = async (): Promise<ICatResponse[]> => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: {
        limit: 16,
      },
    })
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default getRelatedList
