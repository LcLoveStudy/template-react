import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const HeaderComp = (props: { collapsed: boolean; collapseChange: () => void }) => {
  const { collapseChange, collapsed } = props
  return (
    <div className="h-full flex items-center justify-between">
      <div className="ml-[-2rem]">
        {!collapsed ? (
          <MenuFoldOutlined style={{ fontSize: '1.5rem' }} onClick={collapseChange} />
        ) : (
          <MenuUnfoldOutlined style={{ fontSize: '1.5rem' }} onClick={collapseChange} />
        )}
      </div>
      <Button type="primary">退出登录</Button>
    </div>
  )
}

export default HeaderComp
