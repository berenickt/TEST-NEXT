import { css } from '@emotion/react'
import emotionReset from 'emotion-reset'
// https://www.npmjs.com/package/emotion-reset

import { Theme } from '../styles/theme'

export const GlobalStyle = (props: Theme) => css`
  ${emotionReset},

  * {
    margin: 0;
    box-sizing: border-box;
    /* font-family: "myfont"; */
  }
  body {
    background: ${props.BACKGROUND};
    color: ${props.MAIN};
    transition: all 0.1s ease-in-out;
  }

  h2 {
    background: ${props.BACKGROUND};
    color: ${props.SUB};
    transition: all 0.1s ease-in-out;
  }
`
