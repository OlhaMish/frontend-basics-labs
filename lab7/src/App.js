import React from "react";
import Header from "./components/Header"; // Corrected import path
import Content from "./components/Content"; // Corrected import path
import "./style.css";

const App = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
