import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('should render the heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /the wild oasis/i }))
  })
})
