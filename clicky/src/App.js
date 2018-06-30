import React, { Component } from 'react';
import './App.css';

//create start state
//build logic for game
////////////////////////////////
//create array for clicky squares
//create array to hold previously selected squares
//if square hasn't been clicked, add +1 to score
//if square has been clicked, generate game over/restart


class App extends Component {
  //create state
    state = {
    images,
    clickedArray: [],
    status: ""
  };

  random = id => {
    let clickedArray = this.state.clickedArray;

    if(clickedArray.includes(id)){
      this.setState({ clickedArray: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedArray.push(id)

      if(clickedArray.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedArray: []});
        console.log('You Win');
        return;
      }

      this.setState({ images, clickedArray, score: clickedArray.length, status: " " });

      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.images.map(square => (
            <Card
              random={this.random}
              id={square.id}
              key={square.id}
              image={square.image}
            />
          ))}
        </Wrapper>

    </div>
    );
  }
}

export default App;
