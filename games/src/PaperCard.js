import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    padding: 16,
    marginTop: 30,
    marginBottom: 30,
    boxShadow: '0 1px 15px 1px rgba(39,39,39,.1)',
    borderRadius: '.1875rem',
};

class PaperCard extends React.Component {
    render() {
        return (
            <Paper style={style} zDepth={undefined}>
                <div>
                    <h3>{this.props.title}</h3>
                    {this.props.children}
                </div>
            </Paper>
        );
    }
}
export default PaperCard;