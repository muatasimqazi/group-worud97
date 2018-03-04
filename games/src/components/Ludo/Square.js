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
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        fill={this.props.color}
        stroke={this.props.stroke}
        strokeWidth={this.props.strokeWidth}
        draggable
      />
    );
  }
}
