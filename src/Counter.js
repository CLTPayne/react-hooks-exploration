import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1)
  return (
    <span className="controls">
      <button onClick={increment}>Up</button>
        {count}
      <button onClick={decrement}>Down</button>
    </span>
  )
}
