import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Shop,
  Product,
  Cart,
  Checkout,
  Home,
  Contact,
  Blog,
  About,
} from "./pages";
import { Header, Layout, TopHeader } from "./components/index";
import { Login } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <TopHeader />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<Layout />}>
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
