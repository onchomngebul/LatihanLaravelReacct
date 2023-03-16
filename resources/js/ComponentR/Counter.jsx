import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 3);
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 2);
  };
  return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span> {count} </span>
        <button onClick={handleIncrement}>+</button>
    </div>
  );
}

var con = ReactDOM.createRoot(document.getElementById('counter'));
con.render(<Counter></Counter>)