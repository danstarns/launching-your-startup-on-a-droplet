import { useEffect, useState } from "react";

async function getUsers() {
  const baseURL = process.env.REACT_APP_API_URL || "";

  const response = await fetch(`${baseURL}/users`);

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const users = await response.json();

  return users;
}

export function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, []);

  return (
    <div className="users">
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.name}>
            <h2>{user.name}</h2>
            <a href={user.website}>{user.website}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
