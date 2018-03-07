import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import PaperCard from './PaperCard';
import { ROUTES } from './constants';
import RaisedButton from 'material-ui/RaisedButton';
class MainView extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <PaperCard title="Game Three">
                            <div style={{textAlign: "left"}}>
                                <p>Our team built several mini-games. Each team member made a different game. Here's the home page for our games. Click on a game name to PLAY.</p>
                            </div>
                        </PaperCard>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <PaperCard title="Game One">
                            <div>
                                <Link to={ROUTES.ludo}><RaisedButton primary={true} label="Ludo"></RaisedButton></Link>
                                <p>Muatasim Qazi</p>
                            </div>
                        </PaperCard>
                    </Col>
                    <Col sm={6}>
                        <PaperCard title="Game Two">
                            <div>
                                <Link to={ROUTES.guessing}><RaisedButton secondary={true} label="Guessing Game"></RaisedButton></Link>
                                <p>Ju An Oh</p>
                            </div>
                        </PaperCard>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <PaperCard title="Game Three">
                            <div>
                                <a href="/group-worud97/games/tetris"><RaisedButton label="Tetris"></RaisedButton></a>
                                <p>Catherine Yoo</p>
                            </div>
                        </PaperCard>
                    </Col>
                    <Col sm={6}>
                        <PaperCard title="Game Four">
                            <div>
                                <a href="/group-worud97/games/gameoflife"><RaisedButton primary={true} label="The Game of Life"></RaisedButton></a>
                                <p>Ben Celsi</p>

                            </div>
                        </PaperCard>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default MainView;