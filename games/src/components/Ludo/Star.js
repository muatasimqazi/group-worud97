import React, { Component } from 'react';
import { Star } from 'react-konva';
class StarShape extends Component {
    render() {
        let { x, y, scale, color, stroke } = this.props;
        return (
            <Star
                x={x}
                y={y}
                numPoints={5}
                innerRadius={scale / 20}
                outerRadius={scale / 8}
                fill={color}
                stroke={stroke}
                strokeWidth={1}
            />
        );
    }
}

export default StarShape;