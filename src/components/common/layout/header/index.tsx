import styled from '@emotion/styled'
import DarkModeToggle from '../darkmodetoggle/darkmode'

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #808080;
`

export default function LayoutHeader() {
  return (
    <Wrapper>
      여기는 헤더입니다
      {/* 다크모드 */}
      <DarkModeToggle />
    </Wrapper>
  )
}
