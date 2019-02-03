import React, { useState, useEffect } from 'react';

function useCounter({initialState, step}) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  return {count, increment, decrement}
}

export default function Counter() {
  const initialCount = () => Number(window.localStorage.getItem('count') || 0)
  const {count, increment, decrement} = useCounter({initialState: initialCount, step: 1})
  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])
  return (
    <span className="controls">
      <button onClick={increment}>Up</button>
        <div data-testid="count">{count}</div>
      <button onClick={decrement}>Down</button>
    </span>
  )
}
