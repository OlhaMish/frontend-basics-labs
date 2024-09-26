import React, { Component } from "react";
import Image from "./Image"; 


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstElementStyle: {},
      secondElementStyle: {},
      images: [{ id: Date.now(), size: 600 }],
    };
  }

  toggleFirstElementStyle = () => {
    this.setState((prevState) => ({
      firstElementStyle: {
        backgroundColor: prevState.firstElementStyle.backgroundColor === "lightblue" ? "lightgreen" : "lightblue",
        color: prevState.firstElementStyle.color === "black" ? "white" : "black",
      },
    }));
  };

  toggleSecondElementStyle = () => {
    this.setState((prevState) => ({
      secondElementStyle: {
        backgroundColor: prevState.secondElementStyle.backgroundColor === "lightgreen" ? "lightblue" : "lightgreen",
        color: prevState.secondElementStyle.color === "white" ? "black" : "white",
      },
    }));
  };

  addImage = () => {
    const newImage = { id: Date.now(), size: 600 };
    this.setState((prevState) => ({
      images: [...prevState.images, newImage],
    }));
  };

  increaseSize = (id) => {
    this.setState((prevState) => ({
      images: prevState.images.map((img) =>
        img.id === id ? { ...img, size: img.size + 50 } : img
      ),
    }));
  };

  decreaseSize = (id) => {
    this.setState((prevState) => ({
      images: prevState.images.map((img) =>
        img.id === id ? { ...img, size: img.size - 50 } : img
      ),
    }));
  };

  removeImage = (id) => {
    this.setState((prevState) => ({
      images: prevState.images.filter((img) => img.id !== id),
    }));
  };

  render() {
    const { firstElementStyle, secondElementStyle, images } = this.state;

    return (
      <div>
        <p>Was born in Lutsk on February 14, 2005.</p>
        <p>Studied at school number 5 in Lutsk, now studies at KPI</p>
        <p>My hobbies:</p>
        <ul>
          <li>Playing piano</li>
          <li>Reading books</li>
          <li>Swimming</li>
        </ul>
        <p>My favourite books:</p>
        <ol>
          <li
            id="element1"
            style={firstElementStyle}
            onClick={this.toggleFirstElementStyle}
          >
            The Poppy War by R.F. Kuang
          </li>
          <li
            style={secondElementStyle}
            onClick={this.toggleSecondElementStyle}
          >
            The Fifth Season by Nora Keita Jemisin
          </li>
          <li>The Catcher in the Rye by J. D. Salinger</li>
        </ol>

        <p>
          Berlin is the capital and largest city of Germany, both by area and by
          population. Its more than 3.85 million inhabitants make it the European
          Union's most populous city, as measured by population within city
          limits. The city is also one of the states of Germany, and is the third
          smallest state in the country in terms of area. Berlin is surrounded by
          the state of Brandenburg, and Brandenburg's capital Potsdam is nearby.
          The urban area of Berlin has a population of over 4.5 million and is
          therefore the most populous urban area in Germany.
        </p>

        {images.map((img) => (
          <Image
            key={img.id}
            img={img}
            increaseSize={this.increaseSize}
            decreaseSize={this.decreaseSize}
            removeImage={this.removeImage}
          />
        ))}

        <div>
          <button onClick={this.addImage}>Add Image</button>
        </div>
      </div>
    );
  }
}

export default Content;
