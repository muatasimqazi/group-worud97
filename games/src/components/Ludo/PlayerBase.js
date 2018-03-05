//@ts-check
import React, { Component } from 'react';
import { Group } from 'react-konva';
import Square from './Square';
import StarShape from './Star'

class PlayerBase extends Component {
  render() {
    let { x, y, type, scale, scaleInc, color } = this.props;
    return (
      <Group>

        <Group>
          <Square x={x} y={y} width={this.props.width} height={this.props.height} color={color} />
          <Square x={x + scale / 3} y={y + scale / 3} width={scale / 3} height={scale / 3} color="white" />
        </Group>

        <Group>
          <Square x={x} y={y} width={scale / 3} height={scale / 3} stroke="#ddd" strokeWidth={0.5} />
          <Square x={(x + scale) - scale / 3} y={y} width={scale / 3} height={scale / 3} stroke="#ddd" strokeWidth={0.5} />
          <Square x={x + scale - scale / 3} y={y + scale - scale / 3} width={scale / 3} height={scale / 3} stroke="#ddd" strokeWidth={0.5} />
          <Square x={x} y={y + scale - scale / 3} width={scale / 3} height={scale / 3} stroke="#ddd" strokeWidth={0.5} />
        </Group>

        <Group>
          <StarShape x={x + scaleInc + scale / 6} y={y + scaleInc + scale / 6} scale={scale} scaleInc={scaleInc} color="#fff" />
          <StarShape x={x + scale - 30} y={y + scale / 6} scale={scale} scaleInc={scaleInc} color="#fff" />
          <StarShape x={x + scale / 6} y={y + scale - scale / 6} scale={scale} scaleInc={scaleInc} color="#fff" />
          <StarShape x={x + scale - scale / 6} y={y + scale - scale / 6} scale={scale} scaleInc={scaleInc} color="#fff" />
        </Group>




        {{
          1: (
            <Group>
              <Square x={x + scale / 6} y={y + scale} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale / 6} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale / 3} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale / 2} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 3)} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 6)} y={y + scale + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <StarShape x={x + (scale / 3) + 20} y={y + scale + (scale / 3) + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

          2: (
            <Group>
              <Square x={x - scale / 6} y={y + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale / 2} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale - (scale / 3)} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x - scale / 3} y={y + scale - (scale / 6)} width={scale / 6} height={scale / 6} color={color} />
              <StarShape x={x - (scale / 2) + 20} y={y + scale / 3 + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

          3: (
            <Group>
              <Square x={x + scale + (scale / 6)} y={y} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale / 2} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale + (scale / 6)} y={y + scale - (scale / 3)} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale} y={y + scale - (scale / 3)} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <StarShape x={x + (scale) + (scale / 3) + 20} y={y + scale - (scale / 2) + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

          4: (
            <Group>
              <Square x={x} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale / 6} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale / 3} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale / 2} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 3)} y={y - scale / 3} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <Square x={x + scale - (scale / 3)} y={y - scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#ddd" strokeWidth={0.5} />
              <StarShape x={x + scale - (scale / 3 + 20)} y={y - scale + (scale / 2) + 20} stroke={color} scale={scale / 2} color="#fff" />
            </Group>
          ),

        }[type]}

        <Group>
          <Square x={x + 40} y={y + 100} width={scale / 6} height={scale / 6} color={color} stroke="#fff" strokeWidth={3} shadow={true} />
          <Square x={(x + 160)} y={y} width={scale / 6} height={scale / 6} color={color} stroke="#fff" strokeWidth={3} shadow={true} />
          <Square x={x + 40} y={y + scale - scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#fff" strokeWidth={3} shadow={true} />
          <Square x={x} y={y + scale - scale / 6} width={scale / 6} height={scale / 6} color={color} stroke="#fff" strokeWidth={3} shadow={true} />
        </Group>

      </Group>

    );
  }
}
export default PlayerBase;