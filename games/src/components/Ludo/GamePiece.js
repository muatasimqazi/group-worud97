import React, { Component } from 'react';
import { Circle } from 'react-konva';
import Konva from 'konva';

class GamePiece extends Component {
    

    render() {
        let { x, y, radius, fill, stroke } = this.props;
        return (
            <Circle
                x={x}
                y={y}
                radius={18}
                fill={fill}
                stroke='white'
                strokeWidth={1}
                shadowColor='black'
                shadowBlur={2}
                shadowOpacity={0.5}
                draggable
                onClick={this.props.handleClick}
            />
        );
    }
}

export default GamePiece;