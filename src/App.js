import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/imageCard";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    total: 0,
    highest: 0,
  };

  componentDidMount() {
    this.setState({ images: this.shuffle(this.state.images) });
  }

  handleCorrectGuess = newImages => {
    const { highest, total } = this.state;
    const newTotal = total + 1;
    const newHighest = Math.max(newTotal, highest);

    this.setState({
      images: this.shuffle(newImages),
      total: newTotal,
      highest: newHighest
    });
    if (newTotal === 12){
      alert("That's right, it was Leland Palmer!");
      this.setState({
        images: this.resetImages(images),
        total: 0
      })
    }
  };

  handleIncorrectGuess = images => {
    alert('You already guessed that character. Try again.');
    this.setState({
      images: this.resetImages(images),
      total: 0
    });
  };

  resetImages = images => {
    const resetImages = images.map(item => ({ ...item, clicked: false }));
    return this.shuffle(resetImages);
  };

  shuffle = images => {
    let i = images.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
      i--;
    }
    return images;
  };
  handleItemClick = id => {
    let guessedCorrectly = false;
    const newImage = this.state.images.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newImage)
      : this.handleIncorrectGuess(newImage);
  };

  render() {
    return (
      <div id="body">
        <div className="container">
          <Jumbotron />
          <Title>Clicked: {this.state.total} High Score: {this.state.highest} </Title>
          <Wrapper>

            {this.state.images.map(item => (
              <ImageCard
                key={item.id}
                handleClick={this.handleItemClick}
                id={item.id}
                image={item.image}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
