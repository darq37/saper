import { tileLength } from "./Game";

const Tile = ({ tileState, setTileState }) => {
  return <button
	style={ { height: tileLength, width: tileLength } }
	onClick={ () => setTileState({ ...tileState, clicked: true, value: 1 }) }
	onContextMenuCapture={ (e) => {
	  e.preventDefault();
	  return setTileState({ ...tileState, clicked: false, value: 0 });
	} }
  >
	{ tileState?.clicked ? tileState?.value : "" }
  </button>
}
export default Tile;
