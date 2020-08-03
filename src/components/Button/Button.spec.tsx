import * as React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

test('Button', () => {
  const button = shallow(<Button>aaaa</Button>)

  expect(button.text()).toEqual('aaaa')
})
