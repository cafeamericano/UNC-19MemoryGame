import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      highScore: 0,
      data: [
        {
          clicked: false,
          id: 0,
          content: "🍒"
        },
        {
          clicked: false,
          id: 1,
          content: "🍏"
        },
        {
          clicked: false,
          id: 2,
          content: "🍎"
        },
        {
          clicked: false,
          id: 3,
          content: "🍊"
        },
        {
          clicked: false,
          id: 4,
          content: "🍋"
        },
        {
          clicked: false,
          id: 5,
          content: "🍌"
        },
        {
          clicked: false,
          id: 6,
          content: "🍉"
        },
        {
          clicked: false,
          id: 7,
          content: "🍇"
        },
        {
          clicked: false,
          id: 8,
          content: "🍓"
        }
      ]
    };
  }

  increaseScoreOfMain = () => {
    let x = this.state.score;
    this.setState({ score: x + 1 });
  };

  testforHighScore = () => {
    let x = this.state.score;
    let y = this.state.highScore;
    if (x > y) {
      this.setState({ highScore: x });
    }
  };

  resetGame = () => {
    this.setState({ score: 0 });
    for (var i = 0; i < this.state.data.length; i++) {
      this.state.data[i].clicked = false; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  };

  handleClick = arg => {
    console.log(arg);
    if (this.state.data[arg].clicked) {
      alert("You failed!");
      this.resetGame();
    } else {
      this.state.data[arg].clicked = true; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.increaseScoreOfMain();
      //Must not attempt to set state simultaneously
      setTimeout(() => {
        this.testforHighScore();
      }, 10);
    }
  };

  render = () => {

    //Randomize indexes, code pulled from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    var indexes = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    let shuffledIndexes = shuffle(indexes);
    console.log(shuffledIndexes);

    //Create the shuffled array of card components
    let cards = [];
    for (var i = 0; i < this.state.data.length; i++) {
      let items = this.state.data
      cards.push(
        <Card
          content={items[shuffledIndexes[i]].content}
          id={items[shuffledIndexes[i]].id}
          key={items[shuffledIndexes[i]].id}
          handleClick={this.handleClick}
        />
      );
    }

    //Place the following on the screen
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <br></br>
        <Jumbotron />
        <div className="container pt-3">
          <div className="row">{cards}</div>
        </div>
      </div>
    );
  };
}

export default Main;
