import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dot from './Dot';

const styles = {
  face: {
    height: '180px',
    width: '180px',
    margin: '50px auto',
    border: '1px solid gray',
    borderRadius: '10px',
    fontSize: '80px',
  },
  dotContainer: {
    padding: '40px',
    textAlign: 'center',
  },
  die: {
    position: 'relative',
    width: '30px',
    height: '30px',
    border: '1px solid #000',
    borderRadius: '5px',
    margin: '5px',
    display: 'inline-block',
    background: '#fff'
  },
  button: {
    textAlign: 'center',
  },
  dot: [
    // one
    { top: '42%', left: '42%' },
    // two
    [
      { top: '20px', left: '20px' },
      { top: '100px', left: '130px' }
    ],
    // three
    [
      { top: '75px', left: '75px' },
      { top: '0px', left: '20px' },
      { top: '100px', left: '130px' }
    ],
    // four
    [
      { top: '75px', left: '75px' },
      { top: '0px', left: '20px' },
      { top: '100px', left: '130px' },
      { top: '75px', left: '150px' },
    ],
    // five
    [
      { top: '75px', left: '75px' },
      { top: '0px', left: '20px' },
      { top: '100px', left: '130px' }
    ],
    // six
    [
      { backgroundColor: 'purple', top: '20px', left: '20px' },
      { top: '60px', left: '20px' },
      { top: '80px', left: '20px' },

      { backgroundColor: 'blue', top: '20px', left: '120px' },
      { backgroundColor: 'wheat', top: '60px', left: '120px' },
      { backgroundColor: 'cyan', top: '80', left: '120px' }

    ],
  ],
}
export default class DiceRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: 0,
      dieValue: 0,
      player: 'Player',
      playerNum: 1,
      play: true,
      message: "Player 1 turn"
    }
  }
  handleRollDice() {

    // get the die number
    let diceNum = this.rollDice();

    this.setState({
      play: false,
      dieValue: diceNum,
    });

    // wait for the player to move the piece
    setTimeout(() => this.setState({ play: true }), 3000);

    // unchanged if a player gets 6
    if (diceNum == 6) {
      return;
    }
    let currentPlayer = this.state.playerNum;
    if (currentPlayer == 4) {
      this.setState({
        playerNum: 1,
        message: `Player ${1} turn`,
      })
    } else {
      let nextPlayer = this.state.playerNum + 1;
      this.setState({
        playerNum: nextPlayer,
        message: `Player ${nextPlayer} turn`,
      });

    }
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  render() {
    let diceDots = [];
    for (let i = 0; i < this.state.dots; i++) {
      diceDots.push(<Dot key={i} numOfDots={this.state.dots} style={styles.dot[this.state.dots - 1]} numStyle={i} />);
    }
    return (
      <div>
        {
          this.props.isGame
            ?
            <div>
              <h4>{this.state.message}</h4>
              <div style={styles.face}>

                <div style={styles.dotContainer}>
                  {this.state.dieValue}
                  {/* {diceDots} */}
                </div>
              </div>
              <div style={styles.button} >
                <RaisedButton primary={true} label="Roll Dice" onClick={() => this.handleRollDice()} disabled={!this.state.play} />
              </div>
            </div>
            :
            undefined
        }
      </div>
    )
  }
}