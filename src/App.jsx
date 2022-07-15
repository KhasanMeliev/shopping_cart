import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./containers/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Admin from "./Dashboard/Admin";
import Order from "./Dashboard/containers/Order/Order";
import EditProduct from "./Dashboard/containers/EditProducts/EditProduct";
import CreateProduct from "./Dashboard/containers/CreateProducts/CreateProduct";

const Main = () => (
  <>
    <Navbar />
    <Products />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />}>
        <Route index path="orders" element={<Order />} />
        <Route path="editproducts" element={<EditProduct />} />
        <Route path="createproducts" element={<CreateProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
