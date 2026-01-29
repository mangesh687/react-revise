function Wrapper({children}) {
  return (
   <div style={{color:"green", border:"5px solid" ,width:"400px", margin:"10px"}}>
    <h1>This is Wrapper Component</h1>
    {children}
   </div>
  );
}
export default Wrapper;