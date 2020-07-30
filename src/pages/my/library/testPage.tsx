import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@/Button/Button'
import Thumbnail from '@/Thumbnail/Thumbnail'

import { counterStateType, catListStateType } from '~/store'
import { increase, decrease, reset } from '~/store/counter'
import getCatList from '~/useCase/getCatList'

const TestPage: React.FC = () => {
  const dispatch = useDispatch()

  const { number, items } = useSelector(
    (state: { counter: counterStateType; catList: catListStateType }) => ({
      number: state.counter.number,
      items: state.catList.items,
    })
  )

  useEffect(() => {
    getCatList(4)
  }, [])

  return (
    <div className="App">
      <p>this page is TestPage</p>
      <div>
        <h2>Counter</h2>
        <p>{`current counter is: ${number}`}</p>
        <Button
          handleClick={() => {
            dispatch(increase())
          }}
        >
          increase
        </Button>
        <Button
          handleClick={() => {
            dispatch(decrease())
          }}
        >
          decrease
        </Button>
        <Button
          variant="secondary"
          handleClick={() => {
            dispatch(reset(4))
          }}
        >
          reset
        </Button>
        <br />
        <Button
          variant="secondary"
          handleClick={() => {
            getCatList(number, true)
          }}
        >
          Fetch with number
        </Button>
      </div>

      <h2>Thumbnail with redux</h2>
      <Thumbnail items={items} />
      <h2>bulma 12 columns flex layout</h2>
      <div className="columns is-multiline is-mobile">
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
        <div className="column is-6-mobile is-3-tablet is-2-desktop">
          is-6-mobile is-3-tablet is-2-desktop
        </div>
      </div>
    </div>
  )
}

export default TestPage
