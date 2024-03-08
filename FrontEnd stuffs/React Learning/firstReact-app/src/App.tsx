import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      {user.map((obj) => (
        <li key={obj.id}>{obj.name}</li>
      ))}
    </div>
  );
};

export default App;
