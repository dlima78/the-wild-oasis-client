import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'
import Button from '.'

describe('<Button>', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyleRule(
      'padding',
      '1.2rem 1.6rem'
    )
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyleRule(
      'font-size',
      '1.4rem'
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  color: #eef2ff;
  background-color: #6366f1;
}

.c0:hover {
  background-color: #4338ca;
}

<button
  class="c0"
  variations="primary"
>
  <span>
    Buy Now
  </span>
</button>
`)
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'padding: 0.4rem 0.8rem'
    )
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'font-size: 1.2rem'
    )
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'padding: 1.2rem 2.4rem'
    )
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'font-size: 1.6rem'
    )
  })

  it('should render the primary button ', () => {
    renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'color',
      '#eef2ff'
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background-color',
      '#6366f1'
    )
  })

  it('should render the secondary button ', () => {
    renderWithTheme(<Button variations="secondary">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'color',
      '#4b5563'
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background-color',
      '#fff'
    )
  })

  it('should render the secondary button ', () => {
    renderWithTheme(<Button variations="danger">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'color',
      '#fee2e2'
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background-color',
      '#b91c1c'
    )
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
