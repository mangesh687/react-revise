import { useState } from "react";

function ControlledComponent() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>This is Controlled Component</h2>
    <h2>1.Benefits Single Source of Truth /one input filed single state </h2>
    <h2>2.Validation and Manipulation Before Submit</h2>
    <h2>3.Dynamic Updates Values</h2>
        <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} name="username" placeholder="Username" />
        <br />
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} name="email" placeholder="Email" />
        <br />
        <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} name="password" placeholder="Password" />
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => {
          setUsername("");
          setEmail("");
          setPassword("");
        }}>Clear</button>
        <h3>Username: {username}</h3>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
        
     
    </div>
  );
}
export default ControlledComponent;
