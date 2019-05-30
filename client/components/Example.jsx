import React, { useState } from "react";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  // useState is one of the ways that you give state to functional components
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Example Rendering</p>
    </div>
  );
}
