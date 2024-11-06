import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from './test/utils'
import App from './App'

describe('App', () => {
  it('renders with theme toggle', () => {
    render(<App />)

    const toggleButton = screen.getByTestId('theme-toggle')
    expect(toggleButton).toBeInTheDocument()
    expect(toggleButton).toHaveTextContent(/Toggle.*Mode/)
  })

  it('changes theme when toggle is clicked', () => {
    render(<App />)

    const toggleButton = screen.getByTestId('theme-toggle')
    expect(toggleButton).toHaveTextContent(/Toggle Dark Mode/)

    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveTextContent(/Toggle Light Mode/)
  })

  it('renders the main title', () => {
    render(<App />)

    expect(screen.getByText('My awesome app')).toBeInTheDocument()
  })
})
