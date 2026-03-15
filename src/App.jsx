import { useState } from 'react';
function Square({ value, onSquareclick }) {
  return (
    <button className="square" onClick={onSquareclick}>{value}</button>)
}


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleclick(i) {
    if (squares[i] || CalcWin(squares)) {
      return;
    };
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    }
    else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  };

  const Winner=CalcWin(squares);
  let status;
  if (Winner){
    status='Winner:'+ Winner;
  }
  else{
    status='Next player'+ (xIsNext? 'X' : 'O');
  };
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareclick={() => handleclick(0)} />
        <Square value={squares[1]} onSquareclick={() => handleclick(1)} />
        <Square value={squares[2]} onSquareclick={() => handleclick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareclick={() => handleclick(3)} />
        <Square value={squares[4]} onSquareclick={() => handleclick(4)} />
        <Square value={squares[5]} onSquareclick={() => handleclick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareclick={() => handleclick(6)} />
        <Square value={squares[7]} onSquareclick={() => handleclick(7)} />
        <Square value={squares[8]} onSquareclick={() => handleclick(8)} />
      </div>
    </>
  );
}

function CalcWin(squares) {
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
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}