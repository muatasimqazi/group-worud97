//@ts-check
import React, { Component } from 'react';
import Square from './Square';
import StarShape from './Star';
import { Arc, Group } from 'react-konva';
import Konva from 'konva';
import { indigo500 } from 'material-ui/styles/colors';

class CenterSquare extends Component {
    render() {
        return (
            <Group>
                <Square x={this.props.x + 80} y={this.props.y + 40} width={this.props.width} height={this.props.height} color={indigo500} />
                <Square x={this.props.x + 40} y={this.props.y + 80} width={this.props.width} height={this.props.height} color={indigo500} />
                <Square x={this.props.x + 80} y={this.props.y + 80} width={this.props.width} height={this.props.height} color={indigo500} />
                <Square x={this.props.x + 120} y={this.props.y + 80} width={this.props.width} height={this.props.height} color={indigo500} />
                <Square x={this.props.x + 80} y={this.props.y + 120} width={this.props.width} height={this.props.height} color={indigo500} />
                <StarShape x={this.props.x + 100} y={this.props.y + 95} stroke='white' scale={300} color="#fff" />

            </Group>
        );
    }
}

export default CenterSquare;