import React, { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <div
        onClick={onSquareClick}
        className="h-16 w-16 md:w-28 md:h-28 cursor-pointer rounded-lg border-4 bg-white/50 hover:border-white transition-all ease-in text-4xl flex justify-center items-center shadow-xl"
        >
        {value}
        </div>
    );
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
        [2, 4, 6],
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
        console.log("clicked!");
        if (squares[i] || decWinner(squares)) {
        return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
        nextSquares[i] = "🥞";
        } else {
        nextSquares[i] = "🥗";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = decWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Player: " + (xIsNext ? "🥞" : "🥗");
    }

    function handleReset() {
        window.location.reload();
    }

    return (
        <div className="w-full flex flex-col justify-center items-center h-dvh">
        <div className="h-max w-max p-6 rounded-lg bg-blue-400 flex flex-col justify-center items-center shadow-xl">
            <div className="w-full h-max p-4 text-2xl mb-6 font-semibold border-4 rounded-lg shadow-md">
            <ul className="flex justify-around gap-2">
                <li className="bg-white/50 rounded-md py-1 px-8">{status}</li>
            </ul>
            </div>
            <div className="w-max grid grid-cols-3 gap-2 grid-flow-row">
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
        <div className="bg-white rounded-md mt-6 w-full h-max grid justify-around gap-3 md:grid-cols-2 grid-cols-1 p-4 shadow-md">
            <button onClick={handleReset} className="bg-blue-400 px-5 py-2 text-white rounded-md border-b-4 border-blue-300">Play again!</button>
            <button className="bg-blue-400 px-5 py-2 text-white rounded-md border-b-4 border-blue-300">Return home!</button>
        </div>
        </div>
        </div>
    );
}

export default Board;
