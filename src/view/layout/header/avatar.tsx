import { Avatar, Dropdown, MenuProps, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { uesLocalStorage } from '@/hooks'
const AvatarComp = () => {
  const { setStorageValue } = uesLocalStorage('react-userinfo')
  const navigate = useNavigate()
  const MenuItems: MenuProps['items'] = [
    {
      label: '退出登录',
      key: '1'
    }
  ]
  /** 点击菜单项 */
  const MenuItemClickHandler: MenuProps['onClick'] = async ({ key }) => {
    if (key === '1') {
      await setStorageValue(null)
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
