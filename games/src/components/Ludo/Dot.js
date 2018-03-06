import React, { Component } from 'react';

const styles = {
    dot: {
        position: 'absolute',
        width: '15px',
        height: '15px',
        backgroundColor: '#000',

        
        border: '1px solid #000',
        borderRadius: '50%'
    },
}
class Dot extends Component {
    render() {
        let { numOfDots } = this.props;
        return (
            <div>
                {{
                    1: (
                        <div style={{ ...styles.dot, ...this.props.style }} />
                    ),
                    2: (
                        <div style={{ ...styles.dot, ...this.props.style[this.props.numStyle] }} />
                    ),
                    3: (
                        <div style={{ ...styles.dot, ...this.props.style[this.props.numStyle] }} />
                    ),
                    4: (
                        <div style={{ ...styles.dot, ...this.props.style[this.props.numStyle] }} />
                    ),
                    5: (
                        <div style={{ ...styles.dot, ...this.props.style[this.props.numStyle] }} />
                    ),
                    6: (
                        <div style={{ ...styles.dot, ...this.props.style[this.props.numStyle] }} />
                    ),
                }[numOfDots]}

            </div>
        );
    }
}

export default Dot;