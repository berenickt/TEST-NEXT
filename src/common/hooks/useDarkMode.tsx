import { useEffect, useState } from 'react'
import { darkTheme, lightTheme, Theme } from '../styles/theme'

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  // **** 모드가 화이트인지, 다크모드인지 저장
  const setMode = (mode: Theme) => {
    mode === lightTheme //
      ? window.localStorage.setItem('theme', 'light')
      : window.localStorage.setItem('theme', 'dark')
    setTheme(mode)
  }

  // **** 화이트테마면 다크테마, 다크테마면 화이트테마
  const toggleTheme = () => (theme === lightTheme ? setMode(darkTheme) : setMode(lightTheme))

  // **** 페이지 첫 로딩시 localStorage 테마 갖고오기
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme !== null) {
      if (localTheme === 'dark') setTheme(darkTheme)
      else setTheme(lightTheme)
    }
  }, [])

  return { theme, toggleTheme }
}
