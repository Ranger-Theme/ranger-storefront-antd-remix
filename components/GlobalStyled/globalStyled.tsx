import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body {
    position: relative;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-bottom: 0;
  }

  ul,
  ol {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    > li {
      list-style-type: none;
    }
  }
`

export default GlobalStyled
