import React from 'react'
function HandleCheckbox() {
    const [skill,setSkill]=React.useState([]);
    const handleSkill=(e)=>{
      console.log(e.target.value, e.target.checked);
      if(e.target.checked){
        setSkill([...skill,e.target.value]);
      } else {
        setSkill(skill.filter(item => item !== e.target.value));
      }
    }
  return (
    <div>
      <hr />
      <h1>Handling Checkbox in React</h1>  
      <h2>Select your Skills</h2>  
         <input onChange={handleSkill} type="checkbox" id="Java"  value="Java"/>
      <label htmlFor="Java">Java</label><br /><br />

      <input onChange={handleSkill} type="checkbox" id="php"  value="php"/>
      <label htmlFor="php">PHP</label><br />
      <br />
      <input onChange={handleSkill} type="checkbox" id="js"  value="js"/>
      <label htmlFor="js">JavaScript</label><br /><br />
      <input onChange={handleSkill} type="checkbox" id="react"  value="react"/>
      <label htmlFor="react">React</label><br /><br />  <br />
      <input onChange={handleSkill} type="checkbox" id="node"  value="node"/>
      <label htmlFor="node">NodeJS</label><br /><br />
      <h1>{skill.toString()}</h1>

      <button type="submit">Submit</button>
      <hr />
    </div>
  );
} 
export default HandleCheckbox;