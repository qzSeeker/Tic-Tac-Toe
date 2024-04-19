import React, { useState } from "react";

function Square({value,onSquareClick}) {
    return <div onClick={onSquareClick} className="h-14 w-14 cursor-pointer border-4 border-black text-4xl flex justify-center items-center">{value}</div>;

}

function decWinner(squares) {
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

function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        console.log('clicked!');
        if (squares[i] || decWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = "🤡";
        } else {
            nextSquares[i] = "👽";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = decWinner(squares);
    let status;
    if(winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext? "🤡" : "👽");
    }

    return (
        <div className="w-full flex flex-col justify-center items-center h-dvh">
            <div className="text-xl mb-12 font-semibold">{status}</div>
            <div className="w-max grid grid-cols-3 gap-1 grid-flow-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

export default Board;
