import { tileLength } from "./Game";

const Tile = ({ tileState, checkBomb, setFlag }) => {
  return <button
	style={ { height: tileLength, width: tileLength } }
	onClick={ () => {
	  checkBomb(tileState)
	} }
	onContextMenuCapture={ (e) => {
	  e.preventDefault();
	  setFlag(tileState);
	} }
  >
	{ tileState?.flag ? "F" : "" }
	{ tileState?.question ? "?" : "" }
	{ tileState?.bomb ? "*" : "" }
	{ tileState?.clicked ? tileState.adjBombs : "" }
  </button>
}
export default Tile;
