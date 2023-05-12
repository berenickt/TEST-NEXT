import LayoutFooter from './footer'
import LayoutHeader from './header'

interface ILayoutProps {
  children: JSX.Element
}
export default function Layout(props: ILayoutProps) {
  return (
    <>
      {<LayoutHeader />}
      <div style={{ height: '1000px', display: 'flex' }}>
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  )
}
