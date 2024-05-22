import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import AvatarComp from './avatar'
const HeaderComp = (props: { collapsed: boolean; collapseChange: () => void }) => {
  const { collapseChange, collapsed } = props
  /** 折叠icon显示 */
  const FoldIconComp = () => {
    if (collapsed) {
      return <MenuUnfoldOutlined style={{ fontSize: '1.5rem' }} onClick={collapseChange} />
    } else {
      return <MenuFoldOutlined style={{ fontSize: '1.5rem' }} onClick={collapseChange} />
    }
  }
  return (
    <div className="h-full flex items-center justify-between">
      <div className="ml-[-2rem]">{FoldIconComp()}</div>
      <AvatarComp />
    </div>
  )
}

export default HeaderComp
