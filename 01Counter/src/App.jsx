import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount((prev) => prev + 1);
  };

  const subtractValue = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h3>Counter: {count}</h3>
      <button className="btn-add" onClick={addValue}>
        Add 1
      </button>
      <button onClick={subtractValue}>Remove 1</button>
    </>
  );
}

export default App;
