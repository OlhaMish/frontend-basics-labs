import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import GoodsGallery from "./components/GoodsGallery";
import "./style.css";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<> <Header /> <Content /> </>} />
        <Route path="/gallery" element={<GoodsGallery />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
