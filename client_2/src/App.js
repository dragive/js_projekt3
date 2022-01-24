import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Products from "./Pages/Products";
import Orders from "./Pages/Orders";
import AddProduct from "./Pages/AddProduct";
import ModifyProducts from "./Pages/ModifyProducts";
import DeleteProduct from "./Pages/DeleteProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproducts" element={<AddProduct />} />
        <Route path="/modifyproduct" element={<ModifyProducts />} />
        <Route path="/deleteproduct" element={<DeleteProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
