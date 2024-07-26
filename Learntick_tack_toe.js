import { useState } from 'react';

function Square({ value, onChokhthaClik }) {
  return (
    <button className="square" onClick={onChokhthaClik}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  console.log('Winner:', winner)
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onChokhthaClik={() => handleClick(0)} />
        <Square value={squares[1]} onChokhthaClik={() => handleClick(1)} />
        <Square value={squares[2]} onChokhthaClik={() => handleClick(2)} />
        <Square value={squares[3]} onChokhthaClik={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} onChokhthaClik={() => handleClick(4)} />
        <Square value={squares[5]} onChokhthaClik={() => handleClick(5)} />
        <Square value={squares[6]} onChokhthaClik={() => handleClick(6)} />
        <Square value={squares[7]} onChokhthaClik={() => handleClick(7)} />
      </div>
      <div className="board-row">
        <Square value={squares[8]} onChokhthaClik={() => handleClick(8)} />
        <Square value={squares[9]} onChokhthaClik={() => handleClick(9)} />
        <Square value={squares[10]} onChokhthaClik={() => handleClick(10)} />
        <Square value={squares[11]} onChokhthaClik={() => handleClick(11)} />
      </div>
      <div className="board-row">
        <Square value={squares[12]} onChokhthaClik={() => handleClick(12)} />
        <Square value={squares[13]} onChokhthaClik={() => handleClick(13)} />
        <Square value={squares[14]} onChokhthaClik={() => handleClick(14)} />
        <Square value={squares[15]} onChokhthaClik={() => handleClick(15)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  console.log(history)

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c,d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}
