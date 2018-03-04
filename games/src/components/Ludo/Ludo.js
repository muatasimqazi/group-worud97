//@ts-check
import React, { Component } from 'react';
import PlayerBase from './PlayerBase';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import CenterSquare from './Center';
import GridView from './Grid';

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
    render() {
        let gridSize = GRID_UNIT;
        let canvasHeight = window.innerHeight;
        let canvasWidth = window.innerWidth;

        let gridSquares = [];
        for (var i = 0; i <= (canvasWidth / gridSize); i++) {
            gridSquares.push(<GridView key={i} points={[i * gridSize, 0, i * gridSize, canvasHeight]} stroke="#ddd" strokeWidth={1} />);
            gridSquares.push(<GridView key={`${i}s`} points={[0, i * gridSize, canvasWidth, i * gridSize]} stroke="#ddd" strokeWidth={1} />);
        }

        let playerBases = [];
        BASES.forEach((base, i) => {
            playerBases.push(<PlayerBase key={i} x={base.x} y={base.y} width={BASE_SCALE} height={BASE_SCALE} color={base.color} type={base.type} scale={BASE_SCALE} scaleInc={SCALE_INCREMENT} />)
        })
        return (
            <Stage width={360 * 4} height={360 * 4}>
                <Layer>
                    {gridSquares}
                    <Text fontSize={20} padding={15} align="right" text="Welcome to the Ludo Game" />
                    {playerBases}
                    <CenterSquare x={BASE_SCALE + (GRID_UNIT * SCALE_INCREMENT) / 4} y={BASE_SCALE + GRID_UNIT * (SCALE_INCREMENT / 4)} width={GRID_UNIT} height={GRID_UNIT} />

                </Layer>
            </Stage>
        );
    }
}

export default LudoView;