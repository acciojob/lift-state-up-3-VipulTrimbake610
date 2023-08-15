
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [option, setOption] = useState("");
  function handleClick(e){
    setOption(e.target.innerText);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent"> 
            <h2>Parent Component</h2>
            <div>
              <h3>Child Component 1</h3>
              <button onClick={handleClick}>Option 1</button>
            </div>
            <div>
              <h3>Child Component 2</h3>
              <button onClick={handleClick}>Option 2</button>
            </div>
            Selected Option: {option}
        </div>
    </div>
  )
}

export default App
