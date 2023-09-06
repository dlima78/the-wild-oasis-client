import type { Meta, StoryObj } from '@storybook/react'

import Row, { RowProps } from '.'

const meta = {
  title: 'Row',
  component: Row,
  argTypes: {
    type: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    }
  }
} as Meta<RowProps>

export default meta
type Story = StoryObj<typeof Row>

export const Default: Story = {
  render: () => (
    <Row>
      <button>Botão 1</button>
      <button>Botão 2</button>
    </Row>
  )
}
