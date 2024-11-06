import React from 'react'
import { useTheme } from './hooks/useTheme'

const App: React.FC = () => {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <button onClick={toggleTheme} data-testid="theme-toggle">
        Toggle {isDark ? 'Light' : 'Dark'} Mode
      </button>
      <h1>My awesome app</h1>
    </div>
  )
}

export default App
