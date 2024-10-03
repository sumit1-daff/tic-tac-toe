import React from "react";
import { useState } from 'react';
import Sqaure from "./Square"


const Board = () =>{
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn , setXTurn] = useState(true);
    const handleClick = (index) =>{
        const copyState  = [...state];
        copyState[index] = isXTurn?'X' : 'O';
        isXTurn?setXTurn(false):setXTurn(true);
        setState(copyState);
    }

    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return true;
            }
        }
        return false;
    }
    const checkDraw = () =>{
        for (let a in state){
            if(a === null){
                console.log("not draw");
                return false;
            }
        }
        console.log("draw match");
        return false;
    }
    const isWinner = checkWinner();
    if(isWinner){
        if(isXTurn){
            alert("Player 2 Won!!");
        }
        else{
            alert("Player 1 Won!!");
        }
    }
    const isDraw = checkDraw();
    if(isDraw){
        alert("Draw game!");
    }

    return (
        <div className="board-container">
            <div className="board-row">
                <Sqaure onclick={() => handleClick(0)} val={state[0]} />
                <Sqaure onclick={() => handleClick(1)} val={state[1]} />
                <Sqaure onclick={() => handleClick(2)} val={state[2]} />
            </div>
            <div className="board-row">
            <Sqaure onclick={() => handleClick(3)}  val={state[3]} />
            <Sqaure onclick={() => handleClick(4)}  val={state[4]} />
            <Sqaure onclick={() => handleClick(5)}  val={state[5]} />
            </div>
            <div className="board-row">
            <Sqaure onclick={() => handleClick(6)} val={state[6]} />
            <Sqaure onclick={() => handleClick(7)} val={state[7]} />
            <Sqaure onclick={() => handleClick(8)} val={state[8]} />
            </div>
        </div>
    )
}
export default Board;