import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Dashboard/Admin";
import Candidates from "./Dashboard/containers/Candidates/Candidates";
import Basket from "./pages/Basket/Basket";
import Navbar from "./pages/Navbar/Navbar";
import Products from "./pages/Products/Products";

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
        <Route exact path="/" element={<Main />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Candidates />} />
          <Route path="candidates" element={<Candidates />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
