import React from "react";
import { CommonLayout } from "../../components/Layout";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink } from "react-router-dom";
const { Content, Sider, Icon } = Layout;

const Product = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <CommonLayout>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
          >
            <Menu.Item key="1">
              <span>Product List</span>
              <NavLink to="/product" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Add Product</span>
              <NavLink to="/product" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Delete Product</span>
              <NavLink to="/product" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Update Product</span>
              <NavLink to="/product" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </CommonLayout>
  );
};

export default Product;