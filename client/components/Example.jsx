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

//when you set state in hooks it replaces whereas in class components it merges
/* you set the initial state in the useState brackets */
// function ExampleWithManyStates() {
//   // Declare multiple state variables!
//   const [age, setAge] = useState(42);
//   const [fruit, setFruit] = useState('banana');
//   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);