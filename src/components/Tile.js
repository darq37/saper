const Tile = ({val, tileLength}) => {
  return <button style={{height: tileLength, width: tileLength}}>{val}</button>
}
export default Tile;
