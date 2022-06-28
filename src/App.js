import "./App.css";
import Basket from "./Basket/Basket";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import Login from "./login/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Basket />
      <Login />
    </div>
  );
}

export default App;
