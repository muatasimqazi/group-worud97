import React, { Component } from 'react';
import { render } from 'react-dom';
import { Rect } from 'react-konva';
import Konva from 'konva';

export default class Square extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
    });
  };

  render() {
    let { x, y, width, height, color, stroke, strokeWidth, opacity } = this.props;
    let shadow = {};
    {
      this.props.shadow ?
        shadow = {
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffset: { x: 10, y: 10 },
          shadowOpacity: 0.5,
        }
        :
        undefined
    }
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
        shadowColor={shadow.color}
        shadowBlur={shadow.shadowBlur}
        shadowOffset={shadow.shadowOffset}
        shadowOpacity={shadow.shadowOpacity}
        opacity={opacity}
      />
    );
  }
}
