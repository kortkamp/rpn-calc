import { useState } from 'react';
import { Display } from './components/Display'
import { Keyboard } from './components/Keyboard'
// import { Operations } from './services/Operations';

import './styles/calc.scss'

type MemoryType = {
  workRegister:number,
  stack:number[]
}

function App() {

  
  const [displayBuffer, setDisplayBuffer] = useState<string>('0');

  const [memory, setMemory] = useState<MemoryType>({workRegister:0,stack:[]})


  console.log(memory.workRegister)
  console.log(memory.stack)

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

  function executeOperation(operation:(memory:MemoryType) => MemoryType ){
    const newMemory = operation(memory);
    setMemory( newMemory );
    setDisplayBuffer(String(newMemory.workRegister));
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
