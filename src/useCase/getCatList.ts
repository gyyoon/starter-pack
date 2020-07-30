import store from '~/store'
import getRelatedList, { ICatResponse } from '~/service/relatedList'
import { setList } from '~/store/list'

const getCatList = async (limit = 4) => {
  try {
    const res: ICatResponse[] = await getRelatedList({ limit })
    if (!res) {
      throw new Error()
    }
    store.dispatch(setList(res))
  } catch (error) {
    console.log(error)
  }
}

export default getCatList
