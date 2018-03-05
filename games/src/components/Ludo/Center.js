//@ts-check
import React, { Component } from 'react';
import Square from './Square';
import StarShape from './Star';
import { Arc, Group } from 'react-konva';
import Konva from 'konva';

class CenterSquare extends Component {
    render() {
        return (
            <Group>
                <Square x={this.props.x + 40} y={this.props.y} width={this.props.width} height={this.props.height} color="#949697" />
                <Square x={this.props.x} y={this.props.y + 40} width={this.props.width} height={this.props.height} color="#949697" />
                <Square x={this.props.x + 40} y={this.props.y + 40} width={this.props.width} height={this.props.height} color="#949697" />
                <Square x={this.props.x + 80} y={this.props.y + 40} width={this.props.width} height={this.props.height} color="#949697" />
                <Square x={this.props.x + 40} y={this.props.y + 80} width={this.props.width} height={this.props.height} color="#949697" />
                <StarShape x={this.props.x + 60} y={this.props.y + 60} stroke='white' scale={300} color="#fff" />

            </Group>
        );
    }
}

export default CenterSquare;