import React from 'react';
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class BaseSelectionChip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chipColor: '',
            labelColor: 'white',
            chipData: [
                { key: 0, label: 'Red', color: '#C20C37' },
                { key: 1, label: 'Green', color: '#17A269' },
                { key: 2, label: 'Blue', color: '#1489BE' },
                { key: 3, label: 'Yellow', color: '#FED231' },
            ]
        };
        this.styles = {
            chip: {
                margin: 2,

            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center'
            },
        };
    }

    handleGameSelection = (key) => {
        this.chipData = this.state.chipData;
        this.chipData.map((chip, i) => {
            key !== i ? chip.newColor = '#e0e0e0' : chip.newColor = chip.color
        })
        this.setState({ chipData: this.state.chipData });

    };

    renderChip(data) {
        return (
            <Chip
                key={data.key}
                style={{ ...this.styles.chip, ...{ backgroundColor: data.newColor || data.color } }}
                labelColor={this.state.labelColor || "#FFF"}
                onClick={() => this.props.handleGameSelection(data.key)}
            >
                {data.label}
            </Chip>
        );
    }

    render() {
        return (
            <div style={this.styles.wrapper}>
                {this.props.chipData.map(this.renderChip, this)}
            </div>
        );
    }
}