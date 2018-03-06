//@ts-check
import React, { Component } from 'react';
import PaperCard from '../../PaperCard';
import { Row, Col } from 'react-grid-system';
import PlayerBase from './PlayerBase';
import { render } from 'react-dom';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';
import CenterSquare from './Center';
import GridView from './Grid';
import Border from './Border';


const BASE_SCALE = 240
const SCALE_INCREMENT = 4;
const GRID_UNIT = 40;
const BASES = [
    {
        color: '#C20C37',
        x: 40,
        y: 40,
        type: 1,
    },
    {
        color: '#17A269',
        x: BASE_SCALE + GRID_UNIT * SCALE_INCREMENT,
        y: 40,
        type: 2,
    },
    {
        color: '#1489BE',
        x: 40,
        y: BASE_SCALE + GRID_UNIT * SCALE_INCREMENT,
        type: 3,
    },
    {
        color: '#FED231',
        x: BASE_SCALE + GRID_UNIT * SCALE_INCREMENT,
        y: BASE_SCALE + GRID_UNIT * SCALE_INCREMENT,
        type: 4,
    }
];

class LudoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 40,
            color: 'red'
        }
    }
    handleClick() {
        this.setState({
            x: this.state.x + 40,
            color: Konva.Util.getRandomColor()
        })
    }
    render() {
        let gridSize = GRID_UNIT;
        let canvasHeight = 760;
        let canvasWidth = 760;

        let gridSquares = [];
        for (var i = 0; i <= (canvasWidth / gridSize); i++) {
            gridSquares.push(<GridView key={i} points={[i * gridSize, 0, i * gridSize, canvasHeight]} stroke="#ddd" strokeWidth={1} />);
            gridSquares.push(<GridView key={`${i}s`} points={[0, i * gridSize, canvasWidth, i * gridSize]} stroke="#ddd" strokeWidth={1} />);
        }

        let playerBases = [];
        BASES.forEach((base, i) => {
            playerBases.push(<PlayerBase key={i} x={base.x + 40} y={base.y + 40} width={BASE_SCALE} height={BASE_SCALE} color={base.color} type={base.type} scale={BASE_SCALE} scaleInc={SCALE_INCREMENT} handleClick={() => this.handleClick()} newX={this.state.x}/>)
        })
        return (
            <Row>
                <Col sm={9}>
                    <PaperCard title="Welcome to the Ludo Game">
                        <Stage width={BASE_SCALE * 3 + 40} height={BASE_SCALE * 3 + 40} style={{marginLeft: 20, paddingBottom: 20}}>
                            <Layer>
                                {gridSquares}
                                {playerBases}
                                <CenterSquare x={BASE_SCALE + (GRID_UNIT * SCALE_INCREMENT) / 4} y={BASE_SCALE + GRID_UNIT * (SCALE_INCREMENT / 4)} width={GRID_UNIT} height={GRID_UNIT} />
                                <Border x={0} y={0} width={80} height={760} color='#673ab0' opacity={0.9}/>
                                <Border x={0} y={0} width={760} height={80} color='#673ab0' opacity={0.9}/>
                                <Border x={680} y={0} width={80} height={760} color='#673ab0' opacity={0.9}/>
                                <Border x={0} y={680} width={760} height={80} color='#673ab0' opacity={0.9}/>

                            </Layer>
                        </Stage>
                    </PaperCard>
                </Col>
                <Col sm={3}>
                    <PaperCard title="Dice Roll">
                    </PaperCard>
                </Col>
            </Row>
        );
    }
}

export default LudoView;