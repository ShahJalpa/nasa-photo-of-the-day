import React from "react";
import "./App.css";
import GetPictureData from './Components/getNasaData'

function App() {
  return (
    <div className="App">
      {/*<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>*/}
      <GetPictureData />
    </div>
  );
}

export default App;
