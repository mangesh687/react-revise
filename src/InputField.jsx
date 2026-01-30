import { use, useState } from "react";

function InputField() {
  const  [val,setval]=useState("Mangesh Pakhale");
  return (
    <div>
    <h1>Get Input field Value</h1>
    <input type="text" value={val} onChange={(event)=>setval(event.target.value)} placeholder="Enter your name"/>
    <h1>{val}</h1>
    <button onClick={()=>setval("")}>Clear Value</button>
    <hr />
    </div>
  );
}
export default InputField;