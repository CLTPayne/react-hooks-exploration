import React, { useState } from 'react';

function useCounter({initialState, step}) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  return {count, increment, decrement}
}

export default function Counter() {
  const {count, increment, decrement} = useCounter({initialState: 0, step: 1})
  return (
    <span className="controls">
      <button onClick={increment}>Up</button>
        <div data-testid="count">{count}</div>
      <button onClick={decrement}>Down</button>
    </span>
  )
}
