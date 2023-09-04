import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonProps } from '.'

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    variations: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' }
    }
  }
} as Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Buy now'
  }
}

export const asLink: Story = {
  args: {
    size: 'large',
    as: 'a',
    children: 'Buy Now',
    href: '/link'
  }
}
