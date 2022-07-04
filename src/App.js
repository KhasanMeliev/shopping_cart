import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Dashboard/Admin";
import Basket from "./pages/Basket/Basket";
import Navbar from "./pages/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

const Main = () => (
  <>
    <Navbar />
    <Products />
    <Basket />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
