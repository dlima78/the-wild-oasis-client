import type { Meta, StoryObj } from '@storybook/react'

import Heading, { HeadingProps } from '.'

const meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3'],
      control: { type: 'select' }
    }
  }
} as Meta<HeadingProps>

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'The Wild Oasis'
  }
}
