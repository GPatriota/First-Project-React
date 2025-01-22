import React, { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Pablo", "José", "Manoel"]);

  const handleAddUser = () => {
    setUsers([...users, user]);
    setUser("");
  };

  useEffect(() => {
    setCount(users.length);
  }, [users]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h3>Total: {count}</h3>
      <div>
        <input value={user} onChange={(event) => setUser(event.target.value)} />
        <button onClick={handleAddUser}>Adicionar</button>
      </div>
      <hr />
      {users.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
export default App;
