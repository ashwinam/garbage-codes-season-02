import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    // axios
    //   .get<User[]>("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUser(res.data))
    //   .catch((err) => setError(err.message));

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUser(res.data);
        setLoader(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoader(false);
      }
    };

    fetchUser();

    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <div>{user && user.map((obj) => <li key={obj.id}>{obj.name}</li>)}</div>
    </>
  );
};

export default App;
