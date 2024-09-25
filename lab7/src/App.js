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
              <Link to="frontend-basics-labs/lab7/main/index.html">Головна сторінка</Link> 
            </li>
            <li>
              <Link to="frontend-basics-labs/lab7/main/gallery/index.html">Галерея товарів</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route 
            path="frontend-basics-labs/lab7/main/index.html" 
            element={<> <Header /> <Content /> </>} 
          />
          <Route path="frontend-basics-labs/lab7/main/gallery/index.html" element={<GoodsGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
