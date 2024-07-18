import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddProduct from "./Pages/AddProduct";
import ProductPage from "./Pages/ProductPage";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/detailspage/:id" element={<ProductDetails/>}/>
        <Route path="/cartpage" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
