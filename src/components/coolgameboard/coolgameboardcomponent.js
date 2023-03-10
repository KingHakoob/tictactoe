import React, { useState } from "react";
import { Square } from '../square/squarecomponent'
import '../board/board.css';

function CoolBoard({ p1IsNext, squares, onPlay }) {
  const [randArray] = useState(generateRandomArray());

  function generateRandomArray() {
    let array = [];
    for (let i = 1; i <= 9; i++) {
      array.push(i);
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(i) {
    Square.className="CoolSquare";
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (p1IsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let char;
  if(winner){
    status = "Winner: ";
    char = winner;
  } else {
    status = "Next player: ";
    char = (p1IsNext ? 'X' : 'O');
  }


  return (
    <div>
      <div className="status">{status} <span className="charStyling">{char}</span></div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(randArray[0])} />
        <Square value={squares[1]} onSquareClick={() => handleClick(randArray[1])} />
        <Square value={squares[2]} onSquareClick={() => handleClick(randArray[2])} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(randArray[3])} />
        <Square value={squares[4]} onSquareClick={() => handleClick(randArray[4])} />
        <Square value={squares[5]} onSquareClick={() => handleClick(randArray[5])} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(randArray[6])} />
        <Square value={squares[7]} onSquareClick={() => handleClick(randArray[7])} />
        <Square value={squares[8]} onSquareClick={() => handleClick(randArray[8])} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export { CoolBoard };