//@ts-check
import React, { Component } from 'react';
import PaperCard from '../../PaperCard';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import BaseSelectionChip from './BaseSelectionChip';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            player: 'Your',
            playerTurn: true,
            message: 'Select your base!',
            turn: '',
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
        this.chipData.map((chip, i) => {
            key !== i ? chip.newColor = '#e0e0e0' : chip.newColor = chip.color

        })
        this.setState({ chipData: this.state.chipData });

    };

    render() {
        return (
            <PaperCard>
                <p>{this.state.message}</p>
                <BaseSelectionChip chipData={this.state.chipData} handleGameSelection={this.handleGameSelection} />
                <RaisedButton style={{ margin: "20px" }} disabled={!this.state.baseSelected} secondary={!this.props.isGame} label={!this.props.isGame ? "Start Game" : "Stop"} onClick={this.props.play} />
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
        );
    }
}

export default Sidebar;