//@ts-check
import React, { Component } from 'react';
import { Stage, Layer } from 'react-konva';
import GridView from './Grid';
import Border from './Border';
import PlayerBase from './PlayerBase';
import CenterSquare from './Center';
import { indigo500, grey200 } from 'material-ui/styles/colors';

const BASE_SCALE = 240
const SCALE_INCREMENT = 4;
const GRID_UNIT = 40;

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseScale: 240,
            scaleIncremnt: 4,
            gridUnit: 40,
            bases: [
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
            ]
        }
    }

    render() {
        let { isGame, moveX } = this.props;
        let gridSize = GRID_UNIT;
        let canvasHeight = 760;
        let canvasWidth = 760;

        let gridSquares = [];
        for (var i = 0; i <= (canvasWidth / gridSize); i++) {
            gridSquares.push(<GridView key={i} points={[i * gridSize, 0, i * gridSize, canvasHeight]} stroke="#000" strokeWidth={1} />);
            gridSquares.push(<GridView key={`${i}s`} points={[0, i * gridSize, canvasWidth, i * gridSize]} stroke="#000" strokeWidth={1} />);
        }

        let playerBases = [];
        this.state.bases.forEach((base, i) => {
            playerBases.push(<PlayerBase
                key={i}
                x={base.x + 40}
                y={base.y + 40}
                width={BASE_SCALE}
                height={BASE_SCALE}
                color={base.color}
                type={base.type}
                scale={BASE_SCALE}
                scaleInc={SCALE_INCREMENT}
                isGame={isGame}
                moveX={moveX}
            />
            )
        })
        return (
            <Stage width={BASE_SCALE * 3 + 40} height={BASE_SCALE * 3 + 40} style={{ marginLeft: 20, paddingBottom: 20 }}>
                <Layer>
                    {gridSquares}
                    <CenterSquare
                        x={BASE_SCALE + (GRID_UNIT * SCALE_INCREMENT) / 4}
                        y={BASE_SCALE + GRID_UNIT * (SCALE_INCREMENT / 4)}
                        width={GRID_UNIT}
                        height={GRID_UNIT} />
                    {playerBases}
                    <Border x={0} y={0} width={80} height={760} color={grey200} opacity={1} />
                    <Border x={0} y={0} width={760} height={80} color={grey200} opacity={1} />
                    <Border x={680} y={0} width={80} height={760} color={grey200} opacity={1} />
                    <Border x={0} y={680} width={760} height={80} color={grey200} opacity={1} />

                </Layer>
            </Stage>
        );
    }
}

export default Board;