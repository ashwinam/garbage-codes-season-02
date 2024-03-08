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

  const updateUser = (user: User) => {
    const originalUserState = [...users];
    const updatedUser = { id: user.id, name: user.name + "!" };
    setUser(users.map((obj) => (obj.id === user.id ? updatedUser : obj)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updateUser
      )
      .catch((err) => {
        setUser(originalUserState);
        setError((err as AxiosError).message);
      });
  };

  const addUser = () => {
    const originalUserState = [...users];
    const newUser = { id: 0, name: "Ashwin Mandaokar" };
    setUser([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then((res) => {
        setUser([...users, res.data]);
      })
      .catch((err) => {
        setUser(originalUserState);
        setError((err as AxiosError).message);
      });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}

      <div className="d-flex align-items-center justify-content-end">
        <button
          className="btn btn-primary mb-3 fw-bold"
          onClick={() => addUser()}
        >
          Add User
        </button>
      </div>

      <ul className="list-group">
        {users &&
          users.map((obj) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={obj.id}
            >
              {obj.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(obj)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(obj)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
