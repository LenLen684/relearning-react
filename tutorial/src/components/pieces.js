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
        const pieceClick = () => {
            Movement(kind, props.id)
        }
        return <img src={"/assets/"+pieceImg} className="piece" id={props.id} onClick={pieceClick}></img>
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

// Function to handle all movement of the pieces
// Takes in the kind of piece and determines what kind of base movement it can do
function Movement(kind, id){
    let black = id[0] == 'b'
    let parentId = document.getElementById(id).parentElement.id;
    
    // If clicked with highlight, unhighlight or if another piece is clicked, unhighlight all others
    console.log(document.getElementsByClassName("piece"));
    const pieces = document.getElementsByClassName("piece");
    for (let i = 0; i < pieces.length; i++) {
        const element = pieces[i];
        element.classList.remove("highlight");
    }
    const tiles = document.getElementsByClassName("tile");
    for (let i = 0; i < tiles.length; i++) {
        const element = tiles[i];
        element.classList.remove("movement");
        element.classList.remove("take");
    }
    document.getElementById(id).classList.add("highlight");
    // If a tile is clicked and they have the movment class, move the piece to that tile

    switch (kind.toLowerCase()) {
        case "king":
            //King can only move 1 space, omnidirectional and can take on those spaces
            //King can casle
            break;
        case "pawn":
            let forward = black ? parentId[0] + (parseInt(parentId[1])-1) : parentId[0] + (parseInt(parentId[1])+1)
            //pawn can move 1 space forward
            console.log(forward)
            document.getElementById(forward).classList.add("movement")
            //pawn can move 2 spaces forward if on starting space
            console.log(black)
            if (black && parentId[1] == '7' || !black && parentId[1] == '2'){
                forward = black ? parentId[0] + (parseInt(parentId[1])-2) : parentId[0] + (parseInt(parentId[1])+2)
                document.getElementById(forward).classList.add("movement")
            }
            //pawn can take on diagonal spaces
            //en passant
            //when pawn reaches end of board, changes to different piece of the player's choosing
            break;
        case "rook":
            //Rook can move and take vertically and horizontally
            //Castling
            break;
        case "knight":
            //Moves in an L shape (2 vertical 1 horizontal or 2 horizontal, 1 vertical)
            break;
        case "queen":
            //Queen can move and take omnidirectionally, diagonal + vertical + horizontal
            break;
        case "bishop":
            //Bishop moves and takes on the diagonals only
            break;
        default:
            break;
    }
    console.log(id+" "+kind + " was clicked")
}

export {Piece, SpawnPieces}