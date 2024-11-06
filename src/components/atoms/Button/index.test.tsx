import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../../test/utils'
import { Index } from './index.tsx'
import styles from './styles.module.scss'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Index>Click me</Index>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Index onClick={handleClick}>Click me</Index>)

    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    const handleClick = vi.fn()
    render(
      <Index disabled onClick={handleClick}>
        Click me
      </Index>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Index variant="primary">Button</Index>)
    expect(screen.getByRole('button')).toHaveClass(styles.primary)

    rerender(<Index variant="secondary">Button</Index>)
    expect(screen.getByRole('button')).toHaveClass(styles.secondary)
  })

  it('combines custom className with default classes', () => {
    const customClass = 'custom-class'
    render(<Index className={customClass}>Button</Index>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.button)
    expect(button).toHaveClass(styles.primary)
    expect(button).toHaveClass(customClass)
  })
})
