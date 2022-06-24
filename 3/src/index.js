// 추가 버튼 클릭 시 실행하는 함수
const onClickAdd = () => {
  // 텍스트 박스의 Element를 얻는다
  const textEl = document.getElementById("add-text");

  // 텍스트 박스의 값을 얻는다
  const text = textEl.value;

  // 텍스트 박스를 초기화한다(공백)
  textEl.value = "";

  // li 태그 생성
  const li = document.createElement("li");

  // div 태그 생성
  const div = document.createElement("div");

  // p 태그 생성(텍스트 박스의 문자 설정)
  const p = document.createElement("p");
  p.textContent = text;

  // button 태그 생성(라벨: [삭제])
  const button = document.createElement("button");
  button.textContent = "삭제";

  // 버튼 클릭 시, 행 삭체 처리
  button.addEventListener("click", () => {
    // 삭제 대상 행(li)을 얻는다
    // closest는 부모 요소와 일치하는 문자열을 찾는 메서드
    const deleteTarget = button.closest("li");

    // ul 태그 아래에서 위에서 특정한 행을 삭제한다
    document.getElementById("memo-list").removeChild(deleteTarget);
  });

  // div 태그 아래에 p 태그와 button 태그 설정
  div.appendChild(p);
  div.appendChild(button);

  // li 태그 아래에 위 div 태그 설정
  li.appendChild(div);

  // 메모 목록 리스트에 위 li 태그 설정
  document.getElementById("memo-list").appendChild(li);
};

// [추가] 버튼 클릭 시, onClickAdd 함수를 실행하도록 등록
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
