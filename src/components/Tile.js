import "./tile.css";

const Tile = ({ tileState, checkBomb, setFlag, gameOver, onMouseDown }) => {
  const getTileStyle = () => {
	switch (tileState.adjBombs) {
	  case 1:
		return { color: "blue" };
	  case 2:
		return { color: "green" };
		case 3:
		return { color: "red" };
		case 4:
		return { color: "purple" };
		case 5:
		return { color: "black" };
		case 6:
		return { color: "gray" };
		case 7:
		return { color: "maroon" };
	  default:
		return { color: "black" };
	}
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
	className="tile"
	style={ getTileStyle() }
	data-color={ tileState.adjBombs }
  >
	{ tileState?.flag ? "F" : "" }
	{ tileState?.question ? "?" : "" }
	{ gameOver && tileState?.bomb ? "*" : "" }
	{ tileState?.clicked ? tileState.adjBombs : "" }
  </div>
}
export default Tile;
