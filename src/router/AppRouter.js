import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";

const AppRouter = () => {
  return (
    <Router>
      <nav if="nav">
      <h1 id="Daniel">DanielCloches</h1>
        <Link to="/">Главная</Link>
        <Link to="/clothes">Одежда</Link>
        <Link to="/contact">Контакты</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<ProductList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
