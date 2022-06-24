import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  // 사용자 정의 훅으로부터 각각 얻는다
  const { memos, addTodo, deleteTodo } = useMemoList();
  // 텍스트 박스 State
  const [text, setText] = useState<string>("");

  // 텍스트 박스 입력 시 입력 내용을 State에 설정
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // [추가] 버튼 클릭 시
  const onClickAdd = () => {
    // 사용자 정의 훅의 메모 추가 로직 실행
    addTodo(text);
    // 텍스트 박스를 빈 칸으로
    setText("");
  };

  // [삭제] 버튼 클릭 시(몇 번째 버튼이 클릭되었는지 인수로 전달한다)
  const onClickDelete = useCallback(
    (index: number) => {
      // 사용자 정의 훅의 메모 삭제 로직 실행
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <h1>간단 메모 애플리케이션</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>추가</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
