import React, { Component } from 'react';
import Square from './Square';

class Border extends Component {
    render() {
        let { x, y, width, height, color, opacity } = this.props;
        return (
            <Square x={x} y={y} width={width} height={height} color={color} opacity={opacity}/>
        );
    }
}

export default Border;