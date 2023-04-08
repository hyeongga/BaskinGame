import { useContext } from "react";
import { AppContext } from "../App";

function GameResult() {
  const { point, myPoint, addPoint } = useContext(AppContext);

  return (
    <div className="bg-blue-500">
      <div>남은 기회 : {point}</div>
      <div>누적 점수 : {myPoint}</div>
      <div>획득점수 리스트:{addPoint}</div>
    </div>
  );
}
export default GameResult;
