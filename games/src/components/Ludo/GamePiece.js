import React, { Component } from 'react';
import { Circle, Group } from 'react-konva';
import { Motion, spring } from 'react-motion';

class GamePiece extends Component {

    render() {
        let { x, y, radius, fill, stroke, scale, pieceType, pieceFrom, piece, move, pieceNum, pieceBase, prevX, prevY } = this.props;
        let homeX = x, homeY = y;
        if (move && pieceType === pieceBase && piece === pieceNum) {
            switch (pieceType) {
                case 1:
                    homeX = 140;
                    homeY = 340;
                    break;
                case 2:
                    homeX = 420;
                    homeY = 140;
                    break;
                case 3:
                    homeX = 340;
                    homeY = 620;
                    break;
                case 4:
                    homeX = 620;
                    homeY = 420;
                    break;
                default:
                    homeX = x;
                    homeY = y;
                    break;
            }

        }

        return (
            <Group>
                {
                    this.props.isGame && move
                        ?
                        <Motion defaultStyle={{ x: x, y: y }} style={{ x: spring(homeX), y: spring(homeY) }}>
                            {value =>
                                <Circle
                                    ref='circ'
                                    x={value.x}
                                    y={value.y}
                                    radius={18}
                                    fill={fill}
                                    stroke='#eeeeee'
                                    strokeWidth={1.5}
                                    shadowColor={fill}
                                    shadowBlur={1}
                                    shadowOpacity={1}
                                    shadowOffset={{ x: -.2, y: 1.2 }}
                                    draggable
                                    pieceType={this.props.pieceType}
                                    piece={piece}
                                    onClick={this.props.movePiece}
                                />
                            }
                        </Motion>
                        :
                        <Circle
                            ref='circ'
                            x={x}
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
                            pieceType={this.props.pieceType}
                            piece={piece}
                            onClick={this.props.movePiece}
                        />
                }

            </Group>
        );
    }
}

export default GamePiece;