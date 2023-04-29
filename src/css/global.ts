import { createGlobalStyle } from "styled-components"

const HomeStyle: any = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background: linear-gradient(to top right  , #0059ff, #00a1ec);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
`

export default HomeStyle;