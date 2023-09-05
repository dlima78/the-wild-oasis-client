import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'
import Heading from '.'

describe('<Heading>', () => {
  it('should render h1 heading by default', () => {
    const { container } = renderWithTheme(<Heading>The Wild Oasis</Heading>)

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render h2 heading by default', () => {
    renderWithTheme(<Heading type="h2">The Wild Oasis</Heading>)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('should render h3 heading by default', () => {
    renderWithTheme(<Heading type="h3">The Wild Oasis</Heading>)

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
})
