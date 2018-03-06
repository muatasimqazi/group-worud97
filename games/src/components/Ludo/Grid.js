//@ts-check
import React, { Component } from 'react';
import { Line } from 'react-konva';
class GridView extends Component {
    render() {
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