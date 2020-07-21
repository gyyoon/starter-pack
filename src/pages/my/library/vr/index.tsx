import React from 'react'

import Button from '@/Button/Button'

const Vr: React.FC = () => {
  return (
    <div className="App">
      <p>this page is VR</p>
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

export default Vr
