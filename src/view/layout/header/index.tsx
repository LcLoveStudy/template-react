import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const HeaderComp = (props: { collapsed: boolean; collapseChange: () => void }) => {
  const navigate = useNavigate()
  const { collapseChange, collapsed } = props
  /** 折叠icon显示 */
  const FoldIconComp = () => {
    if (collapsed) {
      return <MenuUnfoldOutlined style={{ fontSize: '1.5rem' }} onClick={collapseChange} />
    } else {
      return <MenuFoldOutlined style={{ fontSize: '1.5rem' }} onClick={collapseChange} />
    }
  }
  /** 退出登录 */
  const LogoutHandler = () => {
    navigate('/login', {
      replace: true
    })
  }
  return (
    <div className="h-full flex items-center justify-between">
      <div className="ml-[-2rem]">{FoldIconComp()}</div>
      <Button type="primary" onClick={LogoutHandler}>
        退出登录
      </Button>
    </div>
  )
}

export default HeaderComp
