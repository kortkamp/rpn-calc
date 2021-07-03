import { useState } from 'react';
import { Display } from './components/Display'
import { Keyboard } from './components/Keyboard'
import { Configs } from './configs';
// import { Operations } from './services/Operations';

import './styles/calc.scss'

type MemoryType = {
  workRegister:number,
  stack:number[]
}

function App() {

  
  const [displayBuffer, setDisplayBuffer] = useState<string>('0');

  const [memory, setMemory] = useState<MemoryType>({workRegister:0,stack:[]})


  

  function enterData(){
    memory.stack.unshift(memory.workRegister);
    setMemory(memory);
  }
 
  
  function udateWorkRegister(StringValue:string){
    // when keyboard buffer is empty, we are inseting a new number
    // so push workRegister into stack.
    if(StringValue.length === 1){
      memory.stack.unshift(memory.workRegister);
    }
    memory.workRegister = Number(StringValue);
    setMemory(memory)
    setDisplayBuffer(StringValue);
  }

  function makeDisplayString(value: number){
    let displayString = String(value);
    console.log(displayString.length);
    if(displayString.length > Configs.MAX_DISPLAY_LENGHT){
      displayString = value.toExponential(Configs.MAX_DISPLAY_LENGHT - 5)
    }
    console.log(displayString);
    return displayString;
  }

  function executeOperation(operation:(memory:MemoryType) => MemoryType ){
    const newMemory = operation(memory);
    setMemory( newMemory );


    setDisplayBuffer(makeDisplayString(newMemory.workRegister));
  }

  return (
    <div className='calc'>
      <Display value = {displayBuffer} />
      <Keyboard 
        enterDataCallback = {enterData} 
        udateWorkRegisterCallback = {udateWorkRegister} 
        operationCallback= {executeOperation} />
    </div>
  );
}

export default App;
