import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  // 사용자 정의 훅 사용
  // 함수를 실행하고 반환값을 분할 대입으로 전달한다
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>사용자 정보 얻기</button>
      {/* 에러 발생 시 에러 메시지 표시 */}
      {isError && <p style={{ color: "red" }}>에러가 발생했습니다</p>}
      {/* 로딩 중에는 표시를 전환한다 */}{" "}
      {isLoading ? (
        <p>데이터를 얻고 있습니다</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}:${user.name}(${user.age}세)`}</p>
        ))
      )}
    </div>
  );
};
