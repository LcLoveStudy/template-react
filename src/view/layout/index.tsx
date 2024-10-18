import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { useState } from 'react'
import HeaderComp from './header'
import SiderComp from './sider'
const LayoutDom = () => {
  const { Header, Sider, Content } = Layout
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="w-full h-full">
      <Header className="bg-white border-0 border-b-[1px] border-solid border-slate-200">
        <HeaderComp collapsed={collapsed} collapseChange={() => setCollapsed(!collapsed)} />
      </Header>
      <Layout>
        <Sider
          collapsible={true}
          trigger={null}
          collapsed={collapsed}
          className={`h-full ${!collapsed ? 'w-[10vw]' : 'w-16'}`}
          theme="light"
        >
          <SiderComp />
        </Sider>
        <Content className="lg:p-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutDom
