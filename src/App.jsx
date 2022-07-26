import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./containers/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Admin from "./Dashboard/Admin";
import Order from "./Dashboard/containers/Orders/Order";
import EditProduct from "./Dashboard/containers/EditProducts/EditProduct";
import Footer from "./containers/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import EditModal from "./modal/EditProducts/EditModal";
import { Router } from "./routes/routes";

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
      <Route path={Router.home} element={<Main />} />
      <Route path={Router.about} element={<About />} />
      <Route path={Router.contact} element={<Contact />} />
      <Route exact path={Router.login} element={<Login />} />
      <Route path={Router.register} element={<Register />} />
      <Route path={Router.about} element={<About />} />
      <Route path="editModal" element={<EditModal />} />
      <Route path={Router.admin} element={<Admin />}>
        <Route index path="orders" element={<Order />} />
        <Route path={Router.editProducts} element={<EditProduct />} />
        <Route path={Router.createProducts} element={<createProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
