import React from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthorized } from "../stores/hooks/useAuthStore";
import { Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const isAuthorized = useAuthorized();

  if (!isAuthorized) {
    return <>{children}</>;
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}></Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <FontAwesomeIcon
            className="trigger"
            color="white"
            onClick={() => setCollapsed(!collapsed)}
            icon={faBars}
          />
        </Header>
        <Content className="site-layout-background">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
