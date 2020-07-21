import * as React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import Thumbnail from './Thumbnail'

export default {
  title: 'Thumbnail',
  decorators: [withInfo, withKnobs, withA11y],
}

export const Default = () => (
  <>
    <Thumbnail />
  </>
)
