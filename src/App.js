import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Dashboard/Admin";
import Candidates from "./Dashboard/containers/Candidates/Candidates";
import Basket from "./pages/Basket/Basket";
import Navbar from "./pages/Navbar/Navbar";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
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
        <Route path="/" element={<Main />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Candidates />} />
          <Route path="candidates" element={<Candidates />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
