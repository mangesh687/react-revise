import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Header from './Header'
import Login,{Profile,Settings} from './UserComponent'
import CurlyBraces from './CurlyBraces'
import EventCall from './EventCall'
import UseStates1 from './UseStates1'
import UseStates2 from './UseStates2'
import Counter from './Counter'
import Toggle from './Toggle'
import User1 from './User1'
import User2 from './User2'

function App() {
  const [counter, setCounter] = useState(0)
  const userName="Mangesh Pakhale";
  let x=20;
  let y=30;
  let obj1={
    name:"Mangesh",
    age:26,
    city:"Pune"
  };
  let obj2={
    name:"Pakhale",
    age:27,
    city:"Mumbai"
  };

 return(
  <>
  <Header />
  <h1>counter Val :{counter}</h1>
  <Login />
  <Profile />
  <Settings />
  <Apple />
  <Banana />
  <h1>This is function : {multiply(5, 3)}</h1>
  <h1>Code Step By Step</h1>
  <h1>Hello React 19.2.1</h1>
  <User />
  <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
  <br/>
<h1>New section</h1>
<h1>{userName}</h1>
<h1>{x*y}</h1>
<button onClick={()=>alert("hello")}>Click</button>
<br></br>
<CurlyBraces />
<br></br>
<EventCall />
<br></br>
<h1>Use State</h1>
<UseStates1 />
<br></br>
<UseStates2 />
<br></br>
<Counter />
<br></br>
<h1>Toggle Component</h1>
<Toggle />
<hr></hr>
<h1>Multiple Conditional Rendering in React
 </h1>
<h1>{counter}</h1>
<button onClick={()=>setCounter(counter+1)}>Counter</button>
{
  counter==0?<h1>condition is Zero </h1>:
  counter==1?<h1>condition is One</h1>:
  counter==2?<h1>condition is Two</h1>:
  counter==3?<h1>condition is Three</h1>:
  <h1>condition is Greater than Three</h1>
}
<hr></hr>
<h1>This is User1 Component</h1>
<h1>Props in React JS</h1>
<User1 name="Mangesh" age={26} city="Pune"/>
<hr></hr>
<h1>By using Object Props</h1>
<User2 name={obj1} />
<hr />
<User2 name={obj2} />
  </>
  
 );
}
//components
function Apple(){
  return (
    <h1>This is Apple Component</h1>
  )
}
function Banana(){
  return (
    <h1>This is Banana Component</h1>
  )
}
//function
function multiply(a,b){
  return a*b;
}

export default App
