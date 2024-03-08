import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUser(res.data))
    //   .catch((err) => setError(err.message));

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(res.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div>{user && user.map((obj) => <li key={obj.id}>{obj.name}</li>)}</div>
    </>
  );
};

export default App;
