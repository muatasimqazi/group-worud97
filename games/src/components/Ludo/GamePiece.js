import React, { Component } from 'react';
import { Circle } from 'react-konva';
import { Motion, spring } from 'react-motion';

class GamePiece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 120,
        }
    }
    changeSize() {
        const circ = this.refs.circ;
        circ.setX(80);
    }



    render() {
        let { x, y, radius, fill, stroke } = this.props;
        return (

            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(x) }}>
                {value =>
                    <Circle
                        ref='circ'
                        x={value.x}
                        y={y}
                        radius={18}
                        fill={fill}
                        stroke='#eeeeee'
                        strokeWidth={1.5}
                        shadowColor={fill}
                        shadowBlur={1}
                        shadowOpacity={1}
                        shadowOffset={{ x: -.2, y: 1.2 }}
                        draggable
                        onClick={() => this.changeSize()}

                    />
                }
            </Motion>
        );
    }
}

export default GamePiece;