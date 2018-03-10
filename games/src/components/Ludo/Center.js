//@ts-check
import React, { Component } from 'react';
import Square from './Square';
import StarShape from './Star';
import { Group, Text } from 'react-konva';
import { indigo500 } from 'material-ui/styles/colors';
class CenterSquare extends Component {
    render() {
        let { x, y, width, height } = this.props;
        return (
            <Group>
                <Square x={x + 80} y={y + 40} width={width} height={height} color={indigo500} />
                <Square x={x + 40} y={y + 80} width={width} height={height} color={indigo500} />
                <Square x={x + 80} y={y + 80} width={width} height={height} color={indigo500} />
                <Square x={x + 120} y={y + 80} width={width} height={height} color={indigo500} />
                <Square x={x + 80} y={y + 120} width={width} height={height} color={indigo500} />
                <StarShape x={x + 100} y={y + 95} stroke='white' scale={300} color="#fff" />
                <Text x={x + 75} y={y + 80} width={100} height={height} text="Home" fontFamily="Arial" fontSize={10} fill="#000" padding={10} />
            </Group>
        );
    }
}

export default CenterSquare;