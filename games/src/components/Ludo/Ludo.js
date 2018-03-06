//@ts-check
import React, { Component } from 'react';
import PaperCard from '../../PaperCard';
import { Row, Col } from 'react-grid-system';
import Board from './Board';
import DiceRoll from './DiceRoll';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import BaseSelectionChip from './BaseSelectionChip';

class LudoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGame: false,
            player: 'Your',
            playerTurn: true,
            message: 'Select your base!',
            turn: '',
            dice: 0,
            moveX: 0,
            chipColor: '',
            labelColor: 'white',
            computerBaseColor: 'green',
            chipData: [
                { key: 0, label: 'Red', color: '#C20C37' },
                { key: 1, label: 'Green', color: '#17A269' },
                { key: 2, label: 'Blue', color: '#1489BE' },
                { key: 3, label: 'Yellow', color: '#FED231' },
            ],

        }
    }
    handleRollDice() {
        this.rollDice()
        setTimeout(this.rollDice.bind(this), 3000);

    }
    rollDice() {
        let randomValue = Math.floor(Math.random() * 6) + 1;
        this.setState({ turn: `Dice Value: ${randomValue}` });
        // setTimeout(() => this.setState({ turn: ':' }), 4000)
        this.setState({
            dice: randomValue,
            playerTurn: !this.state.playerTurn,
            player: 'Computer',
        })

    }


    play() {
        this.setState({
            isGame: !this.state.isGame,
            message: 'Select your base!',
        })

        this.state.isGame ? this.setState({
            baseSelected: false,
        }) : this.setState({
            baseSelected: true,
        });
    }
    handleGameSelection = (key) => {
        this.chipData = this.state.chipData;
        let randomNum = Math.floor(Math.random() * (key));
        console.log(randomNum)
        if (randomNum !== key && this.state.playerBaseColor !== this.state.computerBaseColor) {
            this.setState({
                computerBaseColor: this.chipData[randomNum].color,
            })
        } else {
            this.setState({
                computerBaseColor: this.chipData[2].color, // bug: need to be fixe
            })
        }
        this.setState({
            playerBaseColor: this.chipData[key].color,
            baseSelected: true,
            message: 'Click START GAME to begin!',
        })
        const chipsToChange = this.chipData.map((chip, i) => {

            key !== i ? chip.newColor = '#e0e0e0' : chip.newColor = chip.color

        })
        this.setState({ chipData: this.state.chipData });

    };

    render() {

        return (
            <Row>
                <Col sm={9}>
                    <PaperCard>
                        <Board {...this.props} isGame={this.state.isGame} />
                    </PaperCard>
                </Col>
                <Col sm={3}>
                    <PaperCard title="Welcome to the Ludo Game">
                        <p>{this.state.message}</p>
                        <BaseSelectionChip chipData={this.state.chipData} handleGameSelection={this.handleGameSelection} />
                        <RaisedButton style={{ margin: "20px" }} disabled={!this.state.baseSelected} secondary={!this.state.isGame} label={!this.state.isGame ? "Start Game" : "Stop"} onClick={() => this.play()} />
                        {
                            this.state.baseSelected
                                ?
                                <div>
                                    <div style={{ background: this.state.playerBaseColor, color: '#FFF', padding: 10 }}>Your Base Color</div>
                                    <div style={{ background: this.state.computerBaseColor, color: '#FFF', padding: 10 }}>Computer Base Color</div>
                                </div>
                                :
                                undefined
                        }
                    </PaperCard>
                    <div>
                        {
                            this.state.isGame
                                ?
                                <div>
                                    <PaperCard title={this.state.isGame && this.state.playerTurn ? `${this.state.turn}` : undefined}>
                                        <DiceRoll handleRollDice={() => this.handleRollDice()} dice={this.state.dice} isGame={this.state.isGame} playerTurn={this.state.playerTurn} />
                                    </PaperCard>
                                </div>
                                : undefined
                        }
                    </div>

                </Col>
            </Row>
        );
    }
}

export default LudoView;