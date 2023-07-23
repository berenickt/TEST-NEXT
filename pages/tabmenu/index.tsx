import React, { useState } from 'react'
import styled from '@emotion/styled'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

export default function Tabmenu() {
  const [tabMenuInx, setTabMenuInx] = useState(0)

  const onClickTabMenu = (menuIndex: number) => setTabMenuInx(menuIndex)

  return (
    <>
      <Tab>
        <TabMenu onClick={() => onClickTabMenu(0)}>탭메뉴1</TabMenu>
        <TabMenu onClick={() => onClickTabMenu(1)}>탭메뉴2</TabMenu>
      </Tab>
      {tabMenuInx === 0 && <ChildOne />}
      {tabMenuInx === 1 && <ChildTwo />}
    </>
  )
}

const Tab = styled.div`
  display: flex;
  gap: 100px;
  padding: 10px;
  background-color: yellowgreen;
`

const TabMenu = styled.div`
  background-color: dodgerblue;
`
