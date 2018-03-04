//@ts-check
import React, { Component } from 'react';
import Square from './Square';
import { Line } from 'react-konva';
import Konva from 'konva';


class GridView extends Component {
    render() {
        
        let points = [0,0,10,10];
        return (

          <Line
            points={this.props.points}
            stroke={this.props.stroke}
            strokeWidth={this.props.strokeWidth}



          />
        );
    }
}

export default GridView;