import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { createContext } from 'react'
import React from 'react'

import Layout from '@/components/common/layout'
import { useDarkMode } from '@/common/hooks/useDarkMode'
import { GlobalStyle } from '@/common/styles/global'
import { darkTheme, lightTheme, Theme } from '@/common/styles/theme'

interface ContextProps {
  theme: Theme
  toggleTheme: () => void
}

// **** (다크모드 1) Context 만들기, 필요한 데이터 간직
export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => null,
})

export default function App({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useDarkMode() // 다크모드 Context 씌워주기

  return (
    <RecoilRoot>
      {/* <ApolloSetting> */}
      {/* **** (다크모드 2) Context 객체 안에는 Provider라는 컴포넌트가 들어있음 */}
      {/* Provider 컴포넌트에 공유하고자 하는 값을 value 라는 Props로 설정하면, 자식 컴포넌트들에서 해당 값에 접근 가능 */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Global styles={GlobalStyle(theme === lightTheme ? lightTheme : darkTheme)} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
      {/* </ApolloSetting> */}
    </RecoilRoot>
  )
}
