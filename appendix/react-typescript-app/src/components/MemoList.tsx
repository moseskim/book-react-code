import { FC } from "react";
import styled from "styled-components";

// 필요한 Props: 메모 목록과 삭제 시 실행할 함수
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <p>메모 목록</p>
      <ul>
        {memos.map((memo, index) => (
          <li key={memo}>
            <SMemoWrapper>
              <p>{memo}</p>
              <SButton onClick={() => onClickDelete(index)}>삭제</SButton>
            </SMemoWrapper>
          </li>
        ))}
      </ul>
    </SContainer>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
