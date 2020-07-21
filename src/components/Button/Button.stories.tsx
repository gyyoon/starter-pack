import * as React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Button from './Button'

export default {
  title: 'Button',
  decorators: [withInfo, withKnobs, withA11y],
}

export const AllDesignPatterns = () => (
  <>
    <Button variant="primary">{text('button Text', 'Hello Storybook', 'Text')}</Button>
    <Button variant="secondary">{text('button Text', 'Hello Storybook', 'Text')}</Button>
  </>
)

export const Variant = () => (
  <Button variant={select('variant', ['primary', 'secondary'], 'primary')}>
    {text('button Text', 'Hello Storybook')}
  </Button>
)
