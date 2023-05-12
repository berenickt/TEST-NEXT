import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/media'
import { lightTheme, Theme } from '@/common/styles/theme'

interface ToggleProps {
  theme: Theme
}

export const ToggleButton = styled('button')<ToggleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 115px;
  height: 45px;
  right: 2rem;
  top: 60rem;
  border-radius: 30px;
  background: ${({ theme }) => theme.BACKGROUND};
  color: ${({ theme }) => theme.MAIN};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
  &:hover {
    filter: brightness(${({ theme }) => (theme === lightTheme ? '0.9' : '1.13')});
  }
  @media ${breakPoints.tablet} {
    right: 1rem;
    top: 60rem;
    width: 50px;
    height: 30px;
  }
  @media ${breakPoints.mobile} {
    right: 1rem;
    top: 60rem;
    width: 50px;
    height: 30px;
  }
`

export const ModeContent = styled.p`
  font-size: 0.8rem;
  margin-left: 5px;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`
