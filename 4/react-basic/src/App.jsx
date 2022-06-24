import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // State 정의
  const [num, setNum] = useState(0);

  // 버튼 클릭 시 State를 증가(카운트업)
  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>안녕하세요!</h1>
      <ColoredMessage color="blue">건강하시죠?</ColoredMessage>
      <ColoredMessage color="pink">건강합니다!</ColoredMessage>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
    </>
  );
};
