import React from 'react'

import Button from '@/Button/Button'
import Thumbnail from '@/Thumbnail/Thumbnail'

const Library: React.FC = () => {
  return (
    <div className="App">
      <p>this page is Library</p>
      <Button
        variant="primary"
        handleClick={() => {
          console.log('click primary')
        }}
      >
        primary
      </Button>
      <Thumbnail />
    </div>
  )
}

export default Library
