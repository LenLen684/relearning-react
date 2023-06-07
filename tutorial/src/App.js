import logo from './logo.svg';
import {NewBoard} from './components/board.js';
import './App.css';
import { Piece } from './components/pieces';

function App() {
  return (
    <div className='App'>
      <p>Test</p>
      <NewBoard black = "true"/>
      <Piece kind="king"/>
    </div>
  );
}

export default App;
