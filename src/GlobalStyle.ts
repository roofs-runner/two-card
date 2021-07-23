import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
   box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`

export default GlobalStyle
