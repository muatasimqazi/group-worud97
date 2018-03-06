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
    // display: 'flex', 
    // alignItems: 'center', 
    // justifyContent: 'center',
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
    }
  }

  render() {
    let diceDots = [];
    for (let i = 0; i < this.state.dots; i++) {
      diceDots.push(<Dot key={i} numOfDots={this.state.dots} style={styles.dot[this.state.dots - 1]} numStyle={i} />);
    }
    return (
      <div>

        <div style={styles.face}>
          <div style={styles.dotContainer}>
            {this.props.dice}
            {/* {diceDots} */}
          </div>
        </div>
        <div style={styles.button} >
          <RaisedButton primary={true} label="Roll Dice" onClick={this.props.handleRollDice} disabled={!this.props.playerTurn && this.props.isGame}/>
        </div>
      </div>
    )
  }

}