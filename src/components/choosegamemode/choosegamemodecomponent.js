import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Game } from "../game/gamecomponent";
import { CoolGame } from "../coolgame/coolgamecomponent";
import './choosegamemode.css';

function ChooseGameMode() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="chooseModeTitle">Pick Your <span className="chooseModePoison">Poison</span></h1>
                </Col>
            </Row>
            <Row>
                <Col className="buttonCol">
                    <Button className="gameModeBtn" as={Link} to='Game' >Tic Tac Toe</Button>
                </Col>
                <Col className="buttonCol">
                    <Button className="gameModeBtn" as={Link} to='CoolGame' >Tac Toe Tic?</Button>
                </Col>
            </Row>
            <Routes>
                <Route path="Game" element={<Game />}/>
                <Route path="CoolGame" element={<CoolGame />}/>
            </Routes>
        </Container>
    );
}

export { ChooseGameMode };