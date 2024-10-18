import HomeDom from '@/view/home'
import { HomeOutlined } from '@ant-design/icons'
const HomeModule: MenuItemType = {
  order: 1,
  name: '首页',
  path: '/',
  icon: <HomeOutlined />,
  element: <HomeDom />
}

export default HomeModule
