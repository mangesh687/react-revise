import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rcount, setRcount] = useState(99);

  return (
    <div>
      <h1>Counter Component</h1>
      <h2>Count Value: {count}</h2>
        <h2>Count Value: {rcount}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Update Counter by 1 :{count}
      </button>
      <button onClick={()=>setRcount(rcount-1)}>-1 Update counter :{rcount}</button>
    </div>
  );
};

export default Counter;
