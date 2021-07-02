import { useState } from 'react';
import { Display } from './components/Display'
import { Keyboard } from './components/Keyboard'
// import { Operations } from './services/Operations';

import './styles/calc.scss'

function App() {

  
  const [displayBuffer, setDisplayBuffer] = useState<string>('0');

  const [stack , setStack] = useState<Array<number>>([0]);

  console.log(stack)
 
  function enterData(StringValue:string){
    stack[0] = Number(StringValue);
    setStack(stack);
    setDisplayBuffer(StringValue);
  }

  function executeOperation(operation:(stack:number[]) => number[] ){
    setStack( operation(stack) );
    setDisplayBuffer(String(stack[0]))
  }

  return (
    <div className='calc'>
      <Display value = {displayBuffer} />
      <Keyboard enterDataCallback = {enterData} operationCallback= {executeOperation} />
    </div>
  );
}

export default App;
