import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useState } from "react";
import HeaderComp from "./header";
const LayoutDom = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="w-full h-full">
        <Sider
          width={"10rem"}
          collapsible={true}
          trigger={null}
          collapsed={collapsed}
          className="h-full"
          theme="light"
        >
          <div>侧边</div>
        </Sider>
        <Layout>
          <Header className="bg-white">
            <HeaderComp collapsed={collapsed} collapseChange={() => setCollapsed(!collapsed)}/>
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutDom;
