function CurlyBraces() {
  const userName = "Mangesh Pakhale";
  let x=20;
  let y=30;
  const userObject={
    name:"Mangesh",
    age:26,
    city:"Pune"
  };
const userArray=["Mangesh","Pakhale","React","Vite"];
  function fruit(){
    return "Apple";
  }

  function sum(a,b){
    return a+b;
  }
function operation(a,b,op){
  if(op==="+"){
return a+b;
  }
  if(op=="-"){
return a-b;
  }
  if(op=="*"){
return a*b;
  }
  if(op==="/"){
return a/b;
  }else{
    return "Invalid Operation";
  }
}

  return (
<>
<br />
//user variable in jsx
<h1>user variable in jsx</h1>
<h1>{userName}</h1>
<h1>{x*y}</h1>
<h1>{fruit()}</h1>
<h1>{sum(5, 3)}</h1>
<h1>{operation(5, 3, "+")}</h1>
<h1>{operation(5, 3, "-")}</h1>
<h1>{operation(5, 3, "*")}</h1>
<h1>{operation(5, 3, "/")}</h1>
<h1>{operation(5, 3, "%")}</h1>
<h1>{userObject.name}</h1>
<h1>{userObject.age}</h1>
<h1>{userObject.city}</h1>
<h1>{userArray[0]}</h1>
<input type="text" placeholder={userName} />
<br />
</>
  );
}
export default CurlyBraces;