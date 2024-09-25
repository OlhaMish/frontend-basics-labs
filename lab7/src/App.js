import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import GoodsGallery from "./components/GoodsGallery";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/main">Головна сторінка</Link> 
            </li>
            <li>
              <Link to="./main/gallery">Галерея товарів</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="/main" 
            element={<> <Header /> <Content /> </>} 
          />
          <Route path="/main/gallery" element={<GoodsGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
