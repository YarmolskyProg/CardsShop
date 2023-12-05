import React from "react";
import FooterComp from "./Components/FooterComp";
import HeaderComp from "./Components/HeaderComp";
import MainPageComponent from "./Components/MainPage/MainPageComponent";
import ShopComponent from "./Components/ShopPage/ShopComponent";
import ProductComponent from "./Components/ProductPage/ProductComponent";
import ContactPage from "./Components/ContactPage/ContactPage";
import CartPage from "./Components/CartPage/Cartpage";
import { Link, Route, Routes } from "react-router-dom";
import PaymentComponent from "./Components/PaymentPage/PaymentComponent";
function App() {
  return (
    <>
      <a href="https://t.me/" target="_blank" className='support' >
        <img src="/images/sup_img.png" alt="" />
      </a>

      <div className="super_container">
        <HeaderComp />
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="shop/" element={<ShopComponent />} />
          <Route path="shop/:name/:category" element={<ShopComponent />} />
          <Route path="product/*" element={<ProductComponent />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="payment" element={<PaymentComponent />} />
        </Routes>
        <FooterComp />
      </div>
    </>
  );
}

export default App;
