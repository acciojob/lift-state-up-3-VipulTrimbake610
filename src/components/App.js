
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
            <h1>Parent Component</h1>
            <div>
              <h3>Child Component 1</h3>
              <button onClick={handleClick}>Option 1</button>
            </div>
            <div>
              <h3>Child Component 2</h3>
              <button onClick={handleClick}>Option 2</button>
            </div>
            <p>

            Selected Option: {option}
            </p>
        </div>
    </div>
  )
}

export default App
