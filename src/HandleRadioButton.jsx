import React from "react";
function HandleRadioButton() { 
  const [gender, setGender] = React.useState("male");
  const [city, setCity] = React.useState("pune");
  return (
    <div>
      <hr />
      <h1>Handling Radio Button in React</h1>  
      <h2>Select your Gender</h2>  
         <input onChange={(event)=>setGender(event.target.value)} type="radio" id="male"  value="Male         
          " name="gender" checked={gender==="male"}/>       
      <label htmlFor="male">Male</label><br /><br />      
      <input onChange={(event)=>setGender(event.target.value)} type="radio" id="female"  value="Female" name="gender" checked={gender==="female"}/>
      <label htmlFor="female">Female</label><br /><br />
         <input onChange={(event)=>setGender(event.target.value)} type="radio" id="other"  value="Other" name="gender" checked={gender==="other"}/>
      <label htmlFor="other">Other</label><br /><br />  
   <h2>Selected Gender: {gender} </h2>
      <button type="submit">Submit</button>  

      <hr />
      <hr />
      <h1>select city</h1>
      <select onChange={(e)=>setCity(e.target.value)} defaultValue={"pune"}>
        <option value="pune">pune</option>
        <option value="mumbai">mumbai</option>
        <option value="nagpur">nagpur</option>
        <option value="banglore">banglore</option>
      </select>
      <h2>Selected City:{city}</h2>
    </div>
  );
}
export default HandleRadioButton;