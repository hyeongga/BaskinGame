import { useContext } from "react";
import { AppContext } from "../App";

function GameResult() {
  const { point, myPoint, addPoint } = useContext(AppContext);

  return (
    <div className="bg-purple-200 text-2xl ">
      <div className="m-8 border border-purple-500 rounded-3xl p-5 h-[90%] text-purple-800 font-bold">
        <div>남은 기회 : {point}</div>
        <div>나의 점수 : {myPoint}</div>
        <div>점수 리스트:{addPoint}</div>
      </div>
    </div>
  );
}
export default GameResult;
