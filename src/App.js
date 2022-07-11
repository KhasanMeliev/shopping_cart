import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Dashboard/Admin";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Basket from "./containers/Navbar/Basket/Basket";
import Navbar from "./containers/Navbar/Navbar";

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
