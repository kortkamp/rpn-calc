import { useState } from 'react';
import { Display } from './components/Display'
import { Keyboard } from './components/Keyboard'

import './styles/calc.scss'

function App() {


  const [buffer, setBuffer] = useState<string>('0');

  const stack = [0,0,0,0];

  function enterDigit(digit:string){
    console.log(digit);
    if(buffer.length <= 11)
      setBuffer(buffer + digit);
  }

  function executeOperation(operation:string){

  }

  return (
    <div className='calc'>

      <Display value = {buffer} />
      <Keyboard digitCallback = {enterDigit} operationCallback= {executeOperation} />
      
    </div>
  );
}

export default App;
