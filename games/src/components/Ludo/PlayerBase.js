//@ts-check
import React, { Component } from 'react';
import { Group, Text, Arrow } from 'react-konva';
import Square from './Square';
import StarShape from './Star'
import { grey200 } from 'material-ui/styles/colors';

class PlayerBase extends Component {
  render() {
    console.clear();
    let { x, y, width, height, type, scale, scaleInc, color, playerNum } = this.props;
    return (
      <Group>

        <Group>
          <Square x={x} y={y} width={this.props.width} height={this.props.height} color={color} stroke="#000" strokeWidth={0.5} />
          <Text x={x + 80} y={y} width={this.props.width} height={this.props.height} text={`Player ${playerNum}`} fontFamily="Arial" fontSize={16} fill="#FFF" padding={10} />
          <Square x={x + scale / 6} y={y + scale / 6} width={width - 80} height={height - 80} color="white" />
        </Group>

        <Group>
          <Square x={x + scale / 6 + 20} y={y + scale / 6 + 20} width={scale / 6} height={scale / 6} stroke="#000" color={grey200} strokeWidth={0.5} />
          <Square x={(x + scale) - scale / 3 - 20} y={y + scale / 6 + 20} width={scale / 6} height={scale / 6} stroke="#000" color={grey200} strokeWidth={0.5} />
          <Square x={x + scale / 6 + 20} y={y + scale - scale / 3 - 20} width={scale / 6} height={scale / 6} stroke="#000" color={grey200} strokeWidth={0.5} />
          <Square x={x + scale - scale / 3 - 20} y={y + scale - scale / 3 - 20} width={scale / 6} height={scale / 6} stroke="#000" color={grey200} strokeWidth={0.5} />
        </Group>

        {{
          1: (
            <Group>
              <Square x={x + scale / 6} y={y + scale} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale / 6} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale / 3} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale / 2} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 3)} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 6)} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Arrow x={x} y={y + 210} fill={color} points={[5, 90, 35, 90]} pointerLength={10} width={90} height={10} stroke={color} strokeWidth={2} />
              <StarShape x={x + (scale / 3) + 20} y={y + scale + (scale / 3) + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

          2: (
            <Group>
              <Square x={x - scale / 6} y={y + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale / 2} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale - (scale / 3)} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale - (scale / 6)} width={scale / 6} height={scale / 6} color={color} />
              <Arrow x={x + 30} y={y} fill={color} points={[5, 90, 35, 90]} pointerLength={10} width={90} height={10} stroke={color} strokeWidth={2} rotationDeg={90} />
              <StarShape x={x - (scale / 2) + 20} y={y + scale / 3 + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

          3: (
            <Group>
              <Square x={x + scale + (scale / 6)} y={y} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale / 2} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale - (scale / 3)} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale} y={y + scale - (scale / 3)} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Arrow x={x + 210} y={y + 240} fill={color} points={[5, 90, 35, 90]} pointerLength={10} width={90} height={10} stroke={color} strokeWidth={2} rotationDeg={-90} />
              <StarShape x={x + (scale) + (scale / 3) + 20} y={y + scale - (scale / 2) + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

          4: (
            <Group>
              <Square x={x} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale / 6} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale / 3} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale / 2} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 3)} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 3)} y={y - scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#000" strokeWidth={0.5} />
              <Arrow x={x + 240} y={y + 30} fill={color} points={[5, 90, 35, 90]} pointerLength={10} width={90} height={10} stroke={color} strokeWidth={2} rotationDeg={180} />
              <StarShape x={x + scale - (scale / 3 + 20)} y={y - scale + (scale / 2) + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

        }[type]}


      </Group>

    );
  }
}
export default PlayerBase;