import React from "react";
import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <h1>State:</h1>
      <div>
        <h2>1. Counter: {count}</h2>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{ marginRight: "10px" }}
        >
          +
        </button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
      <div>
        <h2>2. Live Text Display:</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <p>{text}</p>
      </div>
      <div>
        <h2>3. Visibility Toggle</h2>
        <button onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? "Show" : "Hide"} paragraph
        </button>
        {!isHidden && <p>Hello World!!</p>}
      </div>
    </div>
  );
};

export default State;