import React from "react";
import './square.css';

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={ onSquareClick }>{value}</button>;
}

export { Square };