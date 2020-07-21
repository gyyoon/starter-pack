import React from 'react'

import Button from '@/Button/Button'

const Video: React.FC = () => {
  return (
    <div className="App">
      <p>this page is Video</p>
      <Button
        variant="primary"
        handleClick={() => {
          console.log('click primary')
        }}
      >
        primary
      </Button>
    </div>
  )
}

export default Video
