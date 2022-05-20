import { useState } from 'react';
import './App.css';
import Misery from './Components/Misery'
import bgVideo from './miserable.mp4'

function App() {

  const [state, setState]=useState(false)

  return (
    
    <div className="App">

      <button onClick={()=>setState(true)}>Clique pour recevoir ta note de TPA</button>


    {state === true && (
      <Misery />
    )}
    </div>

  );
}

export default App;
