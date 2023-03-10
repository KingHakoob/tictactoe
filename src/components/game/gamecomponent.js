import React, { useState } from "react";
import { Board } from '../board/boardcomponent';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './game.css';

function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const p1IsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((sqaures, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className="timeTravelBtn" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <Container>
      <Row>
        <Col xs={8} className="gameBoard">
          <Board p1IsNext={p1IsNext} squares={currentSquares} onPlay={handlePlay} />
        </Col>
        <Col xs={4} className="timeTravelBtnCol">
          <ul className="timeTravelList">{moves}</ul>
        </Col>
      </Row>
      <Row>
        <Col className="gameSelectCol">
          <Button className="gameSelectBtn" as={Link} to='*'>Game Select</Button>
        </Col>
      </Row>
    </Container>
  );
}

export { Game };