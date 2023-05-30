import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const { Header } = Layout;

export const CommonLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Dashboard"]}
        >
          <Menu.Item key="1">
            <span>Dashboard</span>
            <NavLink to="/dashboard" />
          </Menu.Item>
          <Menu.Item key="2">
            <span>User</span>
            <NavLink to="/user" />
          </Menu.Item>
          <Menu.Item key="3">
            <span>Customer</span>
            <NavLink to="/customer" />
          </Menu.Item>
          <Menu.Item key="4">
            <span>Product</span>
            <NavLink to="/product" />
          </Menu.Item>
          <Menu.Item key="5">
            <span>Order</span>
            <NavLink to="/order" />
          </Menu.Item>
          <Menu.Item key="6">
            <span>Coupon</span>
            <NavLink to="/coupon" />
          </Menu.Item>
        </Menu>
      </Header>
      {children}
    </Layout>
  );
};
