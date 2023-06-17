import React from "react"
import {TileLetter} from "./support"

function Piece(props){
    if(props.kind){
        let kind = props.kind+"";
        let pieceImg = (props.black && props.black == "true") ? "Black" : "White";
        switch (kind.toLowerCase()) {
            case "king":
                pieceImg += "King.png"
                break;
            case "pawn":
                pieceImg += "Pawn.png"
                break;
            case "rook":
                pieceImg += "Rook.png"
                break;
            case "knight":
                pieceImg += "Knight.png"
                break;
            case "queen":
                pieceImg += "Queen.png"
                break;
            case "bishop":
                pieceImg += "Bishop.png"
                break;
            default:
                break;
        }
        return <img src={"/assets/"+pieceImg} className="piece" id={props.id}></img>
    }
}

function SpawnPieces(){
    // let pieceNames = ["8 pawns", "2 Rooks", "2 Knights", "2 Bishops", "1 Queen", "1 King"]
    let pieces = []
    for (let i = 0; i < 8; i++) {
        
        let letter = TileLetter(i)
        pieces.push(<Piece id={"wPawn"+letter} kind="pawn"/>)
        pieces.push(<Piece id={"bPawn"+letter} kind="pawn" black="true"/>)
        switch(i){
            case 0:
                pieces.push(<Piece id="bRook1" kind="rook" black="true"/>)
                pieces.push(<Piece id="wRook1" kind="rook" />)
                break;
            case 1:
                pieces.push(<Piece id="bKnight1" kind="Knight" black="true"/>)
                pieces.push(<Piece id="wKnight1" kind="Knight" />)
                break;
            case 2:
                pieces.push(<Piece id="bBishop1" kind="Bishop" black="true"/>)
                pieces.push(<Piece id="wBishop1" kind="Bishop" />)
                break;
            case 3:
                pieces.push(<Piece id="bQueen" kind="Queen" black="true"/>)
                pieces.push(<Piece id="wQueen" kind="Queen" />)
                break;
            case 4:
                pieces.push(<Piece id="bKing" kind="King" black="true"/>)
                pieces.push(<Piece id="wKing" kind="King" />)
                break;
            case 5:
                pieces.push(<Piece id="bBishop2" kind="Bishop" black="true"/>)
                pieces.push(<Piece id="wBishop2" kind="Bishop" />)
                break;
            case 6:
                pieces.push(<Piece id="bKnight2" kind="Knight" black="true"/>)
                pieces.push(<Piece id="wKnight2" kind="Knight" />)
                break;
            case 7:
                pieces.push(<Piece id="bRook2" kind="Rook" black="true"/>)
                pieces.push(<Piece id="wRook2" kind="Rook" />)
                break;
        }
    }
    return pieces
}

export {Piece, SpawnPieces}