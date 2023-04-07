import "./tile.css";

const Tile = ({ tileState, checkBomb, setFlag, gameOver, onMouseDown }) => {
  const getTileStyle = () => {
	let style = {
	  color: "black"
	}
	if (tileState.clicked && tileState.bomb) {
	  return { ...style, backgroundColor: 'red' }
	}
	
	if (tileState.bomb || tileState.flag || tileState.question) {
	  return;
	}
	if (tileState.adjBombs === 1) {
	  style = { ...style, color: "blue" };
	}
	else if (tileState.adjBombs === 2) {
	  style = { ...style, color: "green" };
	}
	else if (tileState.adjBombs === 3) {
	  style = { ...style, color: "red" };
	}
	else if (tileState.adjBombs === 4) {
	  style = { ...style, color: "purple" };
	}
	else if (tileState.adjBombs === 5) {
	  style = { ...style, color: "black" };
	}
	else if (tileState.adjBombs === 6) {
	  style = { ...style, color: "gray" };
	}
	else if (tileState.adjBombs === 7) {
	  style = { ...style, color: "maroon" };
	}
	return style;
  }
  
  return <div
	onClick={ () => {
	  checkBomb(tileState)
	} }
	onContextMenuCapture={ (e) => {
	  e.preventDefault();
	  setFlag(tileState);
	} }
	onMouseDown={ () => onMouseDown(true) }
	onMouseOut={ () => onMouseDown(false) }
	onMouseUp={ () => onMouseDown(false) }
	className={ tileState.clicked ? 'tile tile-clicked' : 'tile' }
	style={ getTileStyle() }
	data-color={ tileState.adjBombs }
  >
	{ !gameOver && tileState?.flag ? "F" : "" }
	{ tileState?.question ? "?" : "" }
	{ gameOver && tileState?.bomb ? "*" : "" }
	{ !tileState?.bomb && tileState?.clicked ? (tileState.adjBombs > 0 && tileState.adjBombs) : "" }
  </div>
}
export default Tile;
