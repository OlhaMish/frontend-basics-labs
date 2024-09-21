import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./style.css";

const App = () => {
  return (
    <div style={{ marginLeft: "2px" }}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
