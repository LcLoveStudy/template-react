import { useRoutes } from "react-router-dom";
import LayoutDom from "../../view/layout";
import {AppRoutes} from './modules'
const routes = [
  {
    path:'/',
    element:<LayoutDom />,
    children:AppRoutes
  }
]

/** 创建routes */
const AppRouter = ()=>{
  return useRoutes(routes)
}
export default AppRouter