import logo from './logo.svg';
import {CleanBoard, FillBoard} from './components/board.js';
import './App.css';
import { Piece, SpawnPieces } from './components/pieces';

function App() {
  return (
    <div className='App'>
      <p>Test</p>
      <SpawnPieces/>
      {/* <Piece kind="king" id="wKing"/> */}
      <CleanBoard black = "true"/>
      {/* <button onclick={FillBoard}>New Game</button> */}
    </div>
  );
}

export default App;
