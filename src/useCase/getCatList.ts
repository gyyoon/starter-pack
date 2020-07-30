import store from '~/store'
import fetchCatList, { ICatResponse } from '~/service/fetchCatList'
import { setCatList } from '~/store/catList'

const getCatList = async (limit: number, reFetch = false) => {
  try {
    if (store.getState().catList.items !== null && !reFetch) return
    const res: ICatResponse[] = await fetchCatList({ limit })

    // data check & data 整形
    if (!res) {
      throw new Error()
    }

    // dispatch store
    store.dispatch(setCatList(res))
  } catch (error) {
    console.log(error)
  }
}

export default getCatList
