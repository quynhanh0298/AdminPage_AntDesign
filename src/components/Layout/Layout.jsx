import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, path) {
  return {
    key,
    icon,
    label: <NavLink to={`/${path}`}>{label}</NavLink>,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />, "dashboard"),
  getItem("User", "2", <DesktopOutlined />, "user"),
  getItem("Customer", "3", <UserOutlined />, "customer"),
  getItem("Product", "4", <TeamOutlined />, "product"),
  getItem("Order", "5", <FileOutlined />, "order"),
  getItem("Coupon", "6", <FileOutlined />, "coupon"),
];
export const CommonLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // // const [current, setCurrent] = useState("mail");
  // // const onClick = (e) => {
  // //   console.log("click ", e);
  // //   setCurrent(e.key);
  // };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          // onClick={onClick}
          // selectedKeys={[current]}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "16px 16px",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
