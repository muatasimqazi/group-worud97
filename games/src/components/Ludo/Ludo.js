//@ts-check
import React, { Component } from 'react';
import PlayerBase from './PlayerBase';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import CenterSquare from './Center';
import GridView from './Grid';

const BASES = window.BASES = [
    {
        color: 'red',
        x: 90,
        y: 90
    },
    {
        color: 'green',
        x: 720,
        y: 90
    },
    {
        color: 'blue',
        x: 90,
        y: 720
    },
    {
        color: 'yellow',
        x: 720,
        y: 720,
    }
];

class LudoView extends Component {
    render() {
        let gridSize = 90;
        let canvasHeight = 360 * 4;
        let canvasWidth = 360 * 4;
        let gridSquares = [];
        for (var i = 0; i <= (600 / 30); i++) {
            gridSquares.push(<GridView key={i} points={[i * gridSize, 0, i * gridSize, canvasHeight]} stroke="#ddd" strokeWidth={0.5} />);
            gridSquares.push(<GridView key={`${i}s`} points={[0, i * gridSize, canvasWidth, i * gridSize]} stroke="#ddd" strokeWidth={0.5} />);
        }

        let playerBases = [];
        BASES.forEach((base, i) => {
            playerBases.push(<PlayerBase key={i} x={base.x} y={base.y} width={360} height={360} color={base.color} />)
        })
        return (
            <Stage width={360 * 4} height={360 * 4}>
                <Layer>
                    {gridSquares}
                    <Text fontSize={40} padding={20} align="center" text="Welcome to the Ludo Game" />
                    {playerBases}
                    <CenterSquare x={450} y={450} width={270} height={270}/>
                    
                </Layer>
            </Stage>
        );
    }
}

export default LudoView;