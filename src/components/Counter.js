import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countNum = () => {
    setCount(count + 1);
  };
  
  return(
    <div>
    <h1>Button clicked {count} times</h1>
    <button onClick={countNum}>Click me</button>
    </div>
  )
}
export default Counter;
