import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/imageCard";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: images,
    clicked: [],
    highest: 0,
    total: 0
  };

  // handles click event on each image
  handleClick = id => {
    //if id is already in clicked array, reset
    if (this.state.clicked.indexOf(id) >= 0) {
      alert("You have already picked that character! Try again!");
      this.setState({ total: 0 })
      this.setState({ clicked: [] })
    } else {
      this.setState({ total: this.state.total + 1 })
      if (this.state.total === this.state.highest) {
        this.setState({ highest: this.state.highest + 1 })
        if (this.state.total === 17) {
          //if total has reached the max (each image clicked once), reset and alert win
          alert("That's right, it was Leland Palmer!");
          this.setState({ highest: 18 })
          this.setState({ total: 0 })
          this.setState({ clicked: [] })
        } else
          this.setState({ clicked: [...this.state.clicked, id] })
      }
    }

    //shuffle images after each click
    this.shuffle(this.state.images)
  }

  //algorithm for shuffling elements in array
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.setState({ images: array })
  }



  // Map over this.state.images and render image on the page
  render() {
    return (
      <div id="body">
        <div class="container">
          <Jumbotron />
          <Title>Clicked: {this.state.total} High Score: {this.state.highest} </Title>
          <Wrapper>

            {this.state.images.map(picture => (
              <ImageCard
                handleClick={this.handleClick}
                id={picture.id}
                image={picture.image}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
