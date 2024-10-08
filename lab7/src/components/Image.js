import React from "react";
import berlin from "../assets/img/berlin.jpg"

const Image = ({ img, increaseSize, decreaseSize, removeImage }) => {
  return (
    <div>
      <a href="https://www.berlin.de/en/" target="_blank" rel="noopener noreferrer">
        <img src={berlin} alt="Berlin" width={img.size} />
      </a>
      <div>
        <button onClick={() => increaseSize(img.id)}>Increase Size</button>
        <button onClick={() => decreaseSize(img.id)}>Decrease Size</button>
        <button onClick={() => removeImage(img.id)}>Remove Image</button>
      </div>
    </div>
  );
};

export default Image;
