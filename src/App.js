import { useRoutes } from "react-router-dom";
import Coupon from "./containers/Coupon";
import Dashboard from "./containers/Dashboard";
import Customer from "./containers/Customer";
import Order from "./containers/Order";
import Product from "./containers/Product";
import User from "./containers/User";

function App() {
  let element = useRoutes([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/user", element: <User /> },
    { path: "/customer", element: <Customer /> },
    { path: "/product", element: <Product /> },
    { path: "/order", element: <Order /> },
    { path: "/coupon", element: <Coupon /> },
  ]);

  return element;
}

export default App;
