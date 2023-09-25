import { useState } from 'react';
import ColorButton from './components/colorButton';
import './App.css';
import './style/colorButton.css'

function App() {

  const [color, setColor] = useState("Dark");

  return (
    <div className={color}>
      <ColorButton 
      color={color}
      setColor={setColor}/>
    </div>
  );
}

export default App;
