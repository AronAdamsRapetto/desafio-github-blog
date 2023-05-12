import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  input, button, textarea, body {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
  }
`
