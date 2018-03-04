//@ts-check
import React, { Component } from 'react';
import Square from './Square';

class CenterSquare extends Component {
    render() {
        return (
            <Square x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} color="purple"/>
        );
    }
}

export default CenterSquare;