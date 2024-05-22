import { Avatar, Dropdown, MenuProps, message } from 'antd'
import { useNavigate } from 'react-router-dom'
const AvatarComp = () => {
  const navigate = useNavigate()
  const MenuItems: MenuProps['items'] = [
    {
      label: '退出登录',
      key: '1'
    }
  ]
  /** 点击菜单项 */
  const MenuItemClickHandler: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') {
      //退出登录
      navigate('/login', {
        replace: true
      })
      message.success('用户已退出')
    }
  }
  return (
    <Dropdown placement="bottom" menu={{ items: MenuItems, onClick: MenuItemClickHandler }}>
      <Avatar
        className="hover:cursor-pointer"
        style={{ backgroundColor: 'orange', verticalAlign: 'middle' }}
        size="large"
        gap={1}
      >
        user
      </Avatar>
    </Dropdown>
  )
}

export default AvatarComp
