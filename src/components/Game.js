import './game.css'
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import { useCallback, useEffect, useState } from "react";
import { getAdjacent, getBoard } from "../utils";

const Game = ({ level }) => {
  const [board, setBoard] = useState([]);
  const [flags, setFlags] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  

  
  
  const onMouseDown = (value) => {
	setIsMouseDown(value);
  }
  
  const resetGame = useCallback(
	() => {
	  setBoard(() => getBoard(level));
	  setTime(0);
	  setPlaying(false);
	  setFlags(0);
	  setGameOver(false);
	},
	[level],
  );
  useEffect(() => {
	resetGame();
  }, [level.size, resetGame]);
  
  const setTileState = (val) => {
	let copy = [...board];
	copy[val.row][val.column] = val;
	setBoard(copy);
  }
  const setFlag = (tile) => {
	if (!tile.flag && !tile.question) {
	  setTileState({ ...tile, flag: true });
	  setFlags(prevState => prevState + 1);
	}
	if (tile.flag && !tile.question) {
	  setTileState({ ...tile, flag: false, question: true });
	  setFlags(prevState => prevState - 1);
	}
	if (!tile.flag && tile.question) {
	  setTileState({ ...tile, flag: false, question: false });
	}
  }
  const checkBomb = (tile) => {
	setPlaying(true);
	if (tile.bomb) {
	  setGameOver(true);
	  return;
	}
	let adjacent = getAdjacent(board, tile.row, tile.column);
	const sum = adjacent.reduce(
	  (accumulator, currentValue) => accumulator + currentValue.bomb,
	  0,
	);
	
	setTileState({ ...tile, clicked: true, adjBombs: sum });
  }
  
  return <div className="game-container">
	<GameInfo resetGame={ resetGame } flagsAmount={ flags } playing={ playing } setTime={ setTime } time={ time }
			  gameOver={ gameOver } isMouseDown={ isMouseDown } bombsAmount={level.bombs}/>
	<GameBoard board={ board } checkBomb={ checkBomb } setFlag={ setFlag } gameOver={ gameOver }
			   onMouseDown={ onMouseDown }/>
  </div>
}
export default Game;
