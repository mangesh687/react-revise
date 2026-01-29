import{ useState} from "react";
function UseStates1() { 

  let fruit ="Mango";
  let count=10;

  const handleFruit=()=>{
    fruit="Banana";
    console.log("Fruit Value:",fruit);
  }
  return (
    <>
      <h1>This is UseStates1 Component</h1>
      <h2>Fruit: {fruit}</h2>
      <h2>Count: {count}</h2>
      <button onClick={handleFruit}> not change the state Change Fruit :</button>
      <br></br>
    </>
  );    
}
export default UseStates1;