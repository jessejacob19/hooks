import React, { useState } from "react";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  // useState is one of the ways that you give state to functional components
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* this seems quite a simpler syntax than class based components */}
      <div>
        {/* this is how you access state */}
        <p>You clicked {count} times</p>
        {/* this is how you change state */}
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}
