import { render, screen } from '@testing-library/react'

import AppLayout from '.'

describe('<AppLayout>', () => {
  it('should render the heading', () => {
    const { container } = render(<AppLayout />)

    expect(
      screen.getByRole('heading', { name: /AppLayout/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
