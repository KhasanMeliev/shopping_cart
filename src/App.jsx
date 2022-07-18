import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./containers/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Admin from "./Dashboard/Admin";
import Order from "./Dashboard/containers/Orders/Order";
import EditProduct from "./Dashboard/containers/EditProducts/EditProduct";
import CreateProduct from "./Dashboard/containers/CreateProducts/CreateProduct";
import Footer from "./containers/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

const Main = () => (
  <>
    <Navbar />
    <Products />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
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
