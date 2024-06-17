import { useRoutes } from 'react-router-dom'
import LayoutDom from '@/view/layout'
import LoginComp from '@/view/login'
import { AppRoutes } from './modules'

const routes: MenuItemType[] = [
  {
    path: '/login',
    name: '登录',
    element: <LoginComp />
  },
  {
    path: '/',
    name: '欢迎',
    element: <LayoutDom />,
    children: AppRoutes
  }
]

// 封装一层 专门负责显示页面标题
const PageTitle = (route: { element: JSX.Element; name: string }) => {
  const { name, element } = route
  document.title = name
  return <>{element}</>
}
const routesCreater = (targetRoutes: MenuItemType[] = routes): MenuItemType[] => {
  return targetRoutes.map((item) => {
    if (item.children) {
      return {
        ...item,
        element: <PageTitle element={item.element} name={item.name}></PageTitle>,
        children: routesCreater(item.children)
      }
    } else {
      return {
        ...item,
        element: <PageTitle element={item.element} name={item.name}></PageTitle>
      }
    }
  })
}

/** 创建routes */
const AppRouter = () => {
  return useRoutes(routesCreater())
}
export default AppRouter
