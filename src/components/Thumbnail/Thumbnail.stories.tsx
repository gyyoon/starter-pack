import * as React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import Thumbnail from './Thumbnail'

export default {
  title: 'Thumbnail',
  decorators: [withInfo, withKnobs, withA11y],
}

const items = [
  { id: '111', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'PgUVo_1n4', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  { id: 'b4q', url: 'https://dummyimage.com/250x250/000/fff' },
  {
    categories: [{ id: 6, name: 'caturday' }],
    id: 'test',
    url: 'https://dummyimage.com/250x250/000/fff',
  },
]

export const Default = () => (
  <>
    <Thumbnail items={items} />
  </>
)
