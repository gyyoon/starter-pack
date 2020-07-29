import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@/Button/Button'
import Thumbnail from '@/Thumbnail/Thumbnail'

import { increase, decrease, reset } from '~/store/counter'

const TestPage: React.FC = () => {
  const [fetchNumber, setFetchNumber] = useState(4)
  const { number } = useSelector((state: { counter: { number: number } }) => ({
    number: state.counter.number,
  }))
  const dispatch = useDispatch()

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
            setFetchNumber(number)
          }}
        >
          Fetch with number
        </Button>
      </div>

      <Thumbnail limit={fetchNumber} />
    </div>
  )
}

export default TestPage
