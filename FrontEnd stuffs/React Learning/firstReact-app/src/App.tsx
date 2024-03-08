import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUser] = useState<User[]>([]);
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
          "https://jsonplaceholder.typicode.com/users/",
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

  const deleteUser = (user: User) => {
    const originalUserState = [...users];
    setUser(users.filter((obj) => user.id !== obj.id)); // update the ui

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setUser(originalUserState);
        setError((err as AxiosError).message);
      });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users &&
          users.map((obj) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={obj.id}
            >
              {obj.name}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(obj)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
