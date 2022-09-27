import { useState } from "react";
import axios from "axios";

// 사용자 목록을 얻는 사용자 정의 훅
export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // 사용자 정보 얻기 버튼 클릭 시 수행할 액션
  const onClickFetchUser = () => {
    // 버튼 클릭 시 로딩 플래그 on, 에러 플래그 off
    setIsLoading(true);
    setIsError(false);

    // API 실행
    axios
      .get("https://example.com/users")
      .then((result) => {
        // 성과 이름을 결합하도록 변환
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        // 사용자 목록 State 업데이트
        setUserList(users);
      })
      // 에러 발생 시 에러 플래그 on
      .catch(() => setIsError(true))
      // 처리 완료 후 로딩 플래스 off
      .finally(() => setIsLoading(false));
  };

  // 모아서 반환할 객체로 설정한다
  return { userList, isLoading, isError, onClickFetchUser };
};
