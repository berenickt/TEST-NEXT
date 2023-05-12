import styled from '@emotion/styled'

interface IProps {
  title: string
  onClick: any
}

const Button = styled.button`
  margin: 0.4rem;
  padding: 1rem 1.5rem;
  color: var(--color-white);
  box-shadow: 0 0 40px 40px var(--main-color) inset, 0 0 0 0 var(--main-color);
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: var(--color-red-500);
    box-shadow: 0 0 10px 0 var(--color-red-200) inset, 0 0 10px 4px var(--color-red-200);
  }
`

export default function EffectButton(props: IProps) {
  return <Button onClick={props.onClick}>{props.title}</Button>
}
