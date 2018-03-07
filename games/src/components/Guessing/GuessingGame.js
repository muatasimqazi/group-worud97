import React, { Component } from 'react';
import question from "./img/question_mark.jpeg";
import youLost from "./img/youLost.gif";
import youWon from "./img/youWon.gif";
import PaperCard from "../../PaperCard";
import up from "./img/up.jpg";
import down from "./img/down.png";
import Warning from "./img/warning.gif";
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  imgStyles: {
    width: "50%",
    height: "300px",
    display: "block",
    margin: "0 auto"
  },

  inputStyle: {
    padding: "20px"
  },
  inputBoxStyle: {
    height: "30",
    padding: "10px"
  }

}

class GuessingGameView extends Component {
  constructor() {
    super();
    this.state = {
      randomNum: 0,
      guessInput: '',
      guessLeft: 10,
      lastGuess: -1,
      img: question,
      play: true
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
      img: question,
      message: ''
    })
  }

  decreaseValue = () => {
    this.setState({
      guessLeft: this.state.guessLeft - 1,
      lastGuess: parseInt(this.state.guessInput),
      guessInput: ''
    });
    let audio = new Audio();
    audio.src = "./music/button.wav"
    audio.play();
    this.displayMessage();
  }

  displayMessage() {
    let userGuess = parseInt(this.state.guessInput);
    let min = 0;
    let max = 100;
    if (userGuess > max || userGuess < min) {
      this.setState({
        message: 'Please Guess a number between 0 to 100',
        img: Warning
      });
    } else if (userGuess > this.state.randomNum) {
      this.setState({
        message: "The number is Lower, Try again.",
        img: down
      });
    } else if (userGuess < this.state.randomNum) {
      this.setState({
        message: "The number is Higher, Try again.",
        img: up
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
        <PaperCard title="GuessingGame">
            {(this.state.guessLeft > 0 && this.state.lastGuess !== this.state.randomNum) ?
              <div align="center" style={styles.inputStyle}>
                <h3>
                  Guess a Number between 0 and 100.
            </h3>
                <h4>
                  {this.state.message}
                </h4>
                <div>
                  <img style={styles.imgStyles} src={this.state.img} alt="question mark from the pexels" width="500" height="500" align="middle" />
                </div>

                <div style={styles.inputStyle}>
                  guessLeft: {this.state.guessLeft}
                </div>

                <div style={styles.inputStyle}>
                  Your Guess?
            </div>

                <div style={styles.inputStyle}>
                <form onSubmit={this.decreaseValue}>
                    <input style={styles.inputBoxStyle} id="guess" type="text"
                      placeholder="Guess Here" value={this.state.guessInput}
                      onInput={evt => this.setState({ guessInput: evt.target.value })}
                    />
                    <RaisedButton label="Submit" type="submit" secondary={true}/>
                  </form>
                </div>
              </div> : (this.state.guessLeft === 0 ? <div>
                <audio id="myAudio" autoPlay={this.state.play}>
                  <source src='./music/Baby_Cry_Long.mp3' type="audio/mp3"/>
                </audio>
                <div align="center">
                  <h3>
                    You Lost 😭
                  </h3>
                  <p>The anwer was: {this.state.randomNum}</p>
                </div>
                <div>
                  <img style={styles.imgStyles} src={youLost} alt="Ebichu from Ebichu" width="500" height="500" align="middle" />
                </div>
                <div>
                  <br/>
                  <RaisedButton label="Play Again?" secondary={true} onClick={evt => this.handlePlayAgain()} />
                </div>
              </div> :
                <div>
                  <audio id="myAudio" autoPlay={this.state.play}>
                    <source src='./music/Applause+sound+effect.mp3' type="audio/mp3"/>
                  </audio>
                  <div align="center">
                    <h3>You Won!!</h3>
                  </div>
                  <div>
                    <img style={styles.imgStyles} src={youWon} alt="Leonardo DiCaprio" width="500" height="500" align="middle" />
                  </div>
                  <div>
                    <br/>
                    <RaisedButton label="Play Again?" secondary={true} onClick={evt => this.handlePlayAgain()} />
                  </div>
                </div>
              )}
        </PaperCard>
      </div>

        );
      }
    }
    
export default GuessingGameView;
