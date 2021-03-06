import axios from 'axios'

export interface ICatResponse {
  breeds: Array<string>
  categories?: Array<{ id: number; name: string }>
  height: number
  id: string
  url: string
  width: number
}

const fetchCatList = async ({ limit = 16 }: { limit?: number }): Promise<ICatResponse[]> => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: {
        limit,
      },
    })
    // check only network error
    return response.data
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchCatList
