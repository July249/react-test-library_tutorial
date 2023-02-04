import { useState, useEffect } from "react";

export default function UserList({ users }) {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
  }, []);

  return (
    <>
      {showTitle && <h1>사용자 목록</h1>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}
