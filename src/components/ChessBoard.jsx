import React from 'react'
import "./ChessBoard.css"

export const ChessBoard = () => {

    let rows = 8;
    let cols = 8;

    let board = [];

    const handleChangeColor = (e) => {

        let boxes = document.querySelectorAll(".board > div");

        for (let i = 0; i < boxes.length; i++) {

            let className = boxes[i].classList.contains("whiteBox");

            if (className) {

                boxes[i].style.backgroundColor = "white";
            }
            else {
                boxes[i].style.backgroundColor = "black";
            }

        }
        e.target.style.backgroundColor = "red";
    }

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < cols; j++) {

            const temp = i + j + 1;

            if (temp % 2 === 0) {

                board.push(<div className='whiteBox' onClick={handleChangeColor}></div>);
            }
            else {
                board.push(<div className='blackBox' onClick={handleChangeColor}></div>);
            }
        }
    }


    return (
        <>
            <div className='board'>{board}</div>
        </>
    )
}
