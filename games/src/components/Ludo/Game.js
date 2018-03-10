import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import PaperCard from '../../PaperCard';
import Sidebar from './Sidebar'
import DiceRoll from './DiceRoll';

import Board from './Board'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGame: true,
            playerTurn: true,
            dice: 0,
        }
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
    render() {
        return (
            <div>
                <Row>
                    <Col sm={9}>
                        <PaperCard title="Welcome to the Ludo game">
                            <div align="left">
                                <p>This board game is very similar to Parcheesi. It can be played by two or four players. The goal for each player is move their pieces to the star base.</p>
                                <p>Each piece goes moves along the white squares according to the rolls of a single die. A piece can be moved out of the home base after a player rolls a die of 6 to get it into play. The player who gets his all of his star pices to the star base wins the game. A piece occupying any of the white score can be sent back to the home base square if another player's piece wants to occupy that same square.</p>
                            </div>
                        </PaperCard>
                    </Col>
                    <Col sm={3}>
                        <Sidebar isGame={this.state.isGame} play={() => this.play()} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <PaperCard>
                            <Board isGame={this.state.isGame} />
                        </PaperCard>
                    </Col>
                    {
                        this.state.isGame
                            ?
                            <Col sm={3}>
                                <PaperCard>
                                    <DiceRoll isGame={this.state.isGame} playerTurn={this.state.playerTurn} />
                                </PaperCard>
                            </Col>

                            : undefined
                    }
                </Row>
            </div>
        );
    }
}

export default Game;