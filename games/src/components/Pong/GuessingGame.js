import React, { Component } from 'react';
import question from "./img/question_mark.jpeg"
import youLost from "./img/youLost.gif"
import youWon from "./img/youWon.gif"

let imgStyles = {
    width: "80%",
    height: "auto",
    display: "block",
    margin: "0 auto"
}

class GuessingGameView extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: 0,
      guessInput:'',
      guessLeft:10,
      lastGuess: -1,
      img: question
    }
  }
  generateRandomNumber() {
    let min = 0;
    let max = 100;
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleUserInput(e) {
    this.setState({
      guessInput: e.target.value
    });
  }

  handlePlayAgain(e) {
      this.setState({
          guessInput: '',
          randomNum: this.generateRandomNumber(),
          guessLeft: 10,
          lastGuess: -1,
          img: question
      })
  }

  decreaseValue = () => {
    this.setState({
      guessLeft: this.state.guessLeft - 1,
      lastGuess: parseInt(this.state.guessInput),
      guessInput: ''
    });
    this.displayMessage();
  }

  displayMessage() {
    let userGuess = parseInt(this.state.guessInput);
    let min = 0;
    let max = 100;
    if (userGuess > max || userGuess < min) {
      this.setState({
        message: 'Please Guess a number between 0 to 100'
        
      });
    } else if (userGuess > this.state.randomNum) {
      this.setState({
        message: "The number is Lower, Try again."
      });
    } else if (userGuess < this.state.randomNum) {
      this.setState({
        message: "The number is Higher, Try again."
      });
    }
  }

  componentDidMount() {
    this.setState({
      randomNum: this.generateRandomNumber()
    })
  }
  
  render() {
    return (
      <div>
          {this.state.randomNum}
          {this.state.lastGuess}
         {(this.state.guessLeft > 0 && this.state.lastGuess !== this.state.randomNum) ? 
         <div>
            <h3 className="container p-3">
                Guess a Number between 0 and 100.
            </h3>
            <h4 className="container p-4">
                {this.state.message}
            </h4>
            <div>
                <img style={imgStyles} src={this.state.img} alt="question mark from the pexels" width="500" height="500" align="middle"/>
            </div>

            <div className="pl-4 pt-4">
                guessLeft: {this.state.guessLeft}
            </div>

            <div className="pl-4 pt-2">
                Your Guess?
            </div>

            <div className="col-4">
            <form className="form-group d-flex">
            <input id="guess" type="text" className="form-control"
            placeholder="Guess Here" value={this.state.guessInput}
            onInput={evt => this.setState({ guessInput: evt.target.value})}
            />
            <button className="btn btn-secondary" onClick={this.decreaseValue} disabled={this.state.guessLeft === 0}>
                Submit
            </button>
            </form>
            </div>
        </div> : (this.state.guessLeft === 0 ? <div>
            <div className="d-flex justify-content-center">
                <h3 className="p-3">You Lost :'(</h3>
            </div>
            <div className="pb-2">
            <img style={imgStyles} src={youLost} alt="Ebichu from Ebichu" width="500" height="500" align="middle"/>
            </div>
            <div className="pl-4">
            <button className="btn btn-secondary" onClick={evt => this.handlePlayAgain()}>
                Play again?
            </button>
            </div>
            </div> : 
            <div>
                <div className="d-flex justify-content-center">
                    <h3 className="p-3">You Won!!</h3>
                </div>
                <div className="pb-2">
                    <img style={imgStyles} src={youWon} alt="Leonardo DiCaprio" width="500" height="500" align="middle"/>
                </div>
                <div className="pl-4">
                <button className="btn btn-secondary" onClick={evt => this.handlePlayAgain()}>
                    Play again?
                </button>
                </div> 
            </div>   
            )}
      </div>
      
    );
  }
}

export default GuessingGameView;
