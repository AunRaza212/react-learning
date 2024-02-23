import { useState } from "react";

function App() {
  const[state,setState]=useState([false,true])
  const fleeFunction = ()=>{
   setState(true)
  }
  
  
  
  return (
    <div  className="flex justify-center items-center my-auto">
      {!state && <div className="bg-green-500" onClick={fleeFunction}>
Button One
      </div>}
    
      {state && <div> On Click show </div>}
 <div className="bg-blue-700" onClick={()=>fleeFunction}>
Button Two
 </div>
 {state && <div> On Click show </div>}
 
    </div>
  );
}

export default App;
