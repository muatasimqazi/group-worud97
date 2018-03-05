

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';

export default class PlayerBase extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={360}
        height={360}
        fill={this.state.color}
        onClick={this.handleClick}
      />
    );
  }
}
