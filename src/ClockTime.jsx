import { useEffect, useState } from "react";

function ClockTime({ color }) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <h1 style={{color:color, backgroundColor:"#000", width:"120px",padding:"10px", borderRadius:"5px"}}>{time}</h1>
    </div>
  );
}
export default ClockTime;
