import { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";

function GameBoard() {
  const { point, setPoint } = useContext(AppContext);
  const { myPoint, setMyPoint, addPoint, setAdd } = useContext(AppContext);
  const [choiceNum, setChoice] = useState();
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100));
  const [hint, setHint] = useState("0~100사이의 숫자를 맞춰보세요");

  //정답 숫자 랜덤으로 생성 확인
  useEffect(() => {
    console.log(`정답은 : ${randomNum}`);
  }, [randomNum]);

  //input란에 숫자 입력
  const onChangeChoice = (e) => {
    setChoice(e.target.value);
  };
  useEffect(() => {
    console.log(`입력한값 : ${choiceNum}`);
  }, [choiceNum]);

  //버튼 클릭 시 (예외사항처리 || 힌트출력 || 점수누적)
  const onClickCheck = () => {
    let checkNum = parseInt(choiceNum);
    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요");
      return;
    }
    if (0 > checkNum || checkNum >= 100) {
      setHint("0이상 100미만의 수를 입력해주세요");
      return;
    }
    if (checkNum === randomNum) {
      setHint("정답입니다🎅");
      setTimeout(() => {
        setHint("다음 Stage~");
        setChoice("");
      }, 1000);

      if (point > 0) {
        localStorage.setItem("totalpoint", parseInt(myPoint) + point);
        setMyPoint(localStorage.getItem("totalpoint"));

        // setAdd(addPoint, concat({ point }));

        console.log(`포인트:${point}`);
        console.log(`saved포인트:${myPoint}`);
      }

      setRandomNum(Math.floor(Math.random() * 100));
      setPoint(5);
    } else if (checkNum > randomNum) {
      setHint(`정답은 ${checkNum}보다 작은 수 입니다.`);
      setPoint(point - 1);
    } else if (checkNum < randomNum) {
      setHint(`정답은 ${checkNum}보다 큰 수 입니다.`);
      setPoint(point - 1);
    }
  };

  return (
    <div className="bg-yellow-500 flex flex-col items-center justify-center">
      <div>{hint}</div>
      <div>
        <input
          className="border-gray"
          type="text"
          value={choiceNum || ""}
          onChange={onChangeChoice}
        />
        <button onClick={onClickCheck}>OK</button>
      </div>
    </div>
  );
}
export default GameBoard;
