import { useState } from "react";

function UseStates2() {  
  const [fruit, setFruit] = useState("Apple");
  const handleFruit = () => {
    setFruit("Banana");
  }
  

  return (
    <div>
      <h2>This is UseStates2 Component</h2>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit</button>
    </div>
  );
}
export default UseStates2;