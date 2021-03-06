import React, { useState, useEffect } from 'react';

export default function EffectHook() {
  const [count, setCount] = useState(0);
  // this effects dom stuff 
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}