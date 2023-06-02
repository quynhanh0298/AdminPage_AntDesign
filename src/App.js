import React from "react";
import { Routes, Route } from "react-router-dom";
import Coupon from "./containers/Coupon";
import Dashboard from "./containers/Dashboard";
import Customer from "./containers/Customer";
import Order from "./containers/Order";
import Product from "./containers/Product";
import User from "./containers/User";
import { CommonLayout } from "./components/Layout";

function App() {
  return (
    <CommonLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </CommonLayout>
  );
}

export default App;
