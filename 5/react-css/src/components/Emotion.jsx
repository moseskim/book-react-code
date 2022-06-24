/** 컴포넌트 파일 안에 CSS를 기술하는 방법 */
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // scss 기술 방법을 그대로 사용할 수 있는 기술 방법
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // 인라인 스타일 기술 방법
  const titleStyle = css({
    margin: 0,
    color: "#aaa",
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion입니다</p>
      <SButton>버튼</SButton>
    </div>
  );
};

// styled-components 기술 방법
const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
