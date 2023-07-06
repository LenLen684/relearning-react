import React, { useEffect } from "react"
import { Piece } from "./pieces";
import {TileLetter, AddPieceToTile} from "./support"

function Tile(props){
    if(props.light && props.light == "true"){
        return(
            <div className = "tile light" id={props.id}>
            </div>
        )
    }
    return(
        <div className = "tile" id={props.id}>
        </div>
    )
}

function CleanBoard(props){
// A chess board is an 8 x 8 board with alternating colors with A1 being a dark tile
    let boardArr = [];
    let blackBoard = props.black && props.black == "true";
    // If the board is white, top down the rows should go 8-1, otherwise it should go 1-8
    for (let i = 0; i < 8; i++) {
        let row = []
        for (let j = 0; j < 8; j++) {
            let tileId = TileLetter(j)+(8-i)

            // Create the checkerboard effect by checking row num and alternate
            let tile = ((j + i) % 2) ? <Tile id = {tileId}/> : <Tile light = "true" id = {tileId}/>;
            row.push(tile);
        }
        if(blackBoard) {row.reverse()}
        boardArr.push(<div id = {"row"+(8-i)} className='row'>{row}</div>)
    }
    if (blackBoard) {boardArr.reverse()}

    useEffect(() => {
        FillBoard()
    })

    return <div id = "board"> {boardArr} </div>;
}

function FillBoard(){
    //Sets all board pieces for both sides
    //8 pawns, 2 Rooks, 2 Knights, 2 Bishops, 1 Queen, 1 King
    for (let i = 0; i < 8; i++) {
        let letter = TileLetter(i)
        AddPieceToTile("wPawn"+letter, letter+"2");
        AddPieceToTile("bPawn"+letter, letter+"7");
        switch(i){
            case 0:
                AddPieceToTile("bRook1" , letter+8)
                AddPieceToTile("wRook1" , letter+1)
                break;
            case 1:
                AddPieceToTile("bKnight1" , letter+8)
                AddPieceToTile("wKnight1" , letter+1)
                break;
            case 2:
                AddPieceToTile("bBishop1" , letter+8)
                AddPieceToTile("wBishop1" , letter+1)
                break;
            case 3:
                AddPieceToTile("bQueen" , letter+8)
                AddPieceToTile("wQueen" , letter+1)
                break;
            case 4:
                AddPieceToTile("bKing" , letter+8)
                AddPieceToTile("wKing" , letter+1)
                break;
            case 5:
                AddPieceToTile("bBishop2" , letter+8)
                AddPieceToTile("wBishop2" , letter+1)
                break;
            case 6:
                AddPieceToTile("bKnight2" , letter+8)
                AddPieceToTile("wKnight2" , letter+1)
                break;
            case 7:
                AddPieceToTile("bRook2" , letter+8)
                AddPieceToTile("wRook2" , letter+1)
                break;
        }
    }    
}

export {CleanBoard, FillBoard};