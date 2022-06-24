import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

export const App = () => {
  // 얻은 사용자 정보
  const [users, setUsers] = useState<User[]>([]);

  // 화면 표시 시 사용자 정보를 얻는다
  // ※ 실제로는 엔드포인트가 존재하지 않으므로 주의
  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};
