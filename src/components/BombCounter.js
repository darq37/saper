import { BOMBS_AMOUNT } from "./Game";

const BombCounter = ({flagsAmount}) => {
  return <>{BOMBS_AMOUNT - flagsAmount}</>
}
export default BombCounter;
