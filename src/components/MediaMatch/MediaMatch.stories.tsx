import type { Meta, StoryObj } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = () => (
  <MediaMatch greaterthan="medium">Only on Desktop</MediaMatch>
)

export const Mobile: StoryObj = () => (
  <MediaMatch lessthan="medium">Only Mobile</MediaMatch>
)

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
