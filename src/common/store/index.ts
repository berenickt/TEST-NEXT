import { v1 } from 'uuid'
import { atom, selector } from 'recoil'
import { getAccessToken } from '../libraries/getAccessToken'

export const isEditState = atom({
  key: `isEditState/${v1()}`, // state의 이름
  default: false, // 초기값
})

// **** 로그인 관련
export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: '',
})

export const restoreAccessTokenLoadable = selector({
  key: `restoreAccessTokenLoadable/${v1()}`,
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  },
})

// **** 방문 페이지
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: '/', // default page
})

// **** 장바구니
export const basketUsedItems = atom({
  key: `basketUsedItems/${v1()}`,
  default: [],
})

// **** 최근에 본 상품
export const isToday = atom({
  key: `isToday/${v1()}`,
  default: true,
})
