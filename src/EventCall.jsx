function EventCall(){
  function callFun(){
    alert("function called.....")
  }   

  const fruit=()=>{
    alert("apple")
  }

  const veg=(vegi)=>{
    alert(vegi)
  }
  return(
    <>
    <h1>Event Handling in React</h1>    
    <button onClick={callFun}>Normal function</button>
    <button onClick={fruit}>arrow function</button>
    <button onClick={()=>veg("Carrot")}>parameter function 1</button>   
    <button onClick={()=>veg("cat")}>parameter function 2</button>   
    </>
  )
} 
export default EventCall;