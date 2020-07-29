import React from 'react'

import Button from '@/Button/Button'

const Index: React.FC = () => {
  return (
    <div className="App">
      <p>this page is Index</p>
      <Button
        handleClick={() => {
          console.log('click primary')
        }}
      >
        primary
      </Button>
    </div>
  )
}

export default Index
