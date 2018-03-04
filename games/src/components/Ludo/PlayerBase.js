//@ts-check
import React, { Component } from 'react';
import { Group } from 'react-konva';
import Square from './Square';

class PlayerBase extends Component {
  render() {
    return (
      <Group>
        <Square x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height} color={this.props.color} />

        <Square x={this.props.x} y={this.props.y} width={this.props.width / 4} height={this.props.height / 4} color="cyan" />
        <Square x={this.props.x} y={this.props.y + 270} width={this.props.width / 4} height={this.props.height / 4} color="magenta" />
        <Square x={this.props.x + 270} y={this.props.y} width={this.props.width / 4} height={this.props.height / 4} color="magenta" />
        <Square x={this.props.x + 270} y={this.props.y + 270} width={this.props.width / 4} height={this.props.height / 4} color="magenta" />

      </Group>
    );
  }
}
export default PlayerBase;