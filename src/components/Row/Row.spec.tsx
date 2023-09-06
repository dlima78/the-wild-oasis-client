import { render, screen } from '@testing-library/react'

import Row from '.'

describe('<Row>', () => {
  it('should render the horizontal Row', () => {
    const { container } = render(
      <Row type="horizontal">
        <button>botão 1</button>
        <button>botão 2</button>
      </Row>
    )

    expect(screen.getByTestId('row')).toHaveStyleRule('flex-direction', 'row')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the vertical Row', () => {
    render(
      <Row type="vertical">
        <button>botão 1</button>
        <button>botão 2</button>
      </Row>
    )

    expect(screen.getByTestId('row')).toHaveStyleRule(
      'flex-direction',
      'column'
    )
  })
})
