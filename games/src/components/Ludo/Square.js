import React from 'react';
import { Rect } from 'react-konva';

export default class Square extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
    });
  };

  render() {
    let { x, y, width, height, color, stroke, strokeWidth } = this.props;

    return (
      <Rect
        ref="rect"
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    );
  }
}
