import "./tile.css";

const Tile = ({ tileState, checkBomb, setFlag, gameOver, onMouseDown }) => {
  return <div
	onClick={ () => {
	  checkBomb(tileState)
	} }
	onContextMenuCapture={ (e) => {
	  e.preventDefault();
	  setFlag(tileState);
	} }
	onMouseDown={() => onMouseDown(true)}
	onMouseOut={() => onMouseDown(false)}
	onMouseUp={() => onMouseDown(false)}
	className="tile"
  >
	{ tileState?.flag ? "F" : "" }
	{ tileState?.question ? "?" : "" }
	{ gameOver && tileState?.bomb ? "*" : "" }
	{ tileState?.clicked ? tileState.adjBombs : "" }
  </div>
}
export default Tile;
