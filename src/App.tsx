import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />

      <GlobalStyle />
    </ThemeProvider>
  )
}
