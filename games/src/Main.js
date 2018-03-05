import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import PaperCard from './PaperCard';
class MainView extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={6}>
                        <PaperCard title="Game One">
                            <div>
                                Ludo
                    </div>
                        </PaperCard>
                    </Col>
                    <Col sm={6}>
                        <PaperCard title="Game Two">
                            <div>
                                Pong
                    </div>
                        </PaperCard>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <PaperCard title="Game Three">
                            <div>
                                Tetris
                        </div>
                        </PaperCard>
                    </Col>
                    <Col sm={6}>
                        <PaperCard title="Game Four">
                            <div>
                                Game of Life
                    </div>
                        </PaperCard>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MainView;