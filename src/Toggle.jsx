import { useState } from "react";

function Toggle() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <h2>This is Toggle Component</h2>

      {
      display ? <h1>Display is True</h1>: 
        <h1>Display is False</h1>
      }
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  );
}

export default Toggle;
