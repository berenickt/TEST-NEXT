import React, { ReactElement, useContext } from 'react'

import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { ThemeContext } from 'pages/_app'
import { lightTheme } from '@/common/styles/theme'
import * as S from './darkmode.styles'

export default function DarkModeToggle(): ReactElement {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <S.ToggleButton onClick={toggleTheme} theme={theme}>
      {theme === lightTheme ? (
        <>
          <DarkModeIcon aria-label="darkMoon" />
          <S.ModeContent>다크 모드</S.ModeContent>
        </>
      ) : (
        <>
          <LightModeIcon aria-label="lightSun" />
          <S.ModeContent>라이트 모드</S.ModeContent>
        </>
      )}
    </S.ToggleButton>
  )
}
