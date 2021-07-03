import { useState } from "react"

import { DigitKeyboard } from "./DigitKeyboard"
import { Key } from "./Key"
import { Configs } from '../configs'

import {Operations} from '../services/Operations'

import '../styles/keyboard.scss'

type MemoryType = {
  workRegister:number,
  stack:number[]
}

type KeyboardProps = {
  enterDataCallback: () => void,
  udateWorkRegisterCallback: (digit:string)=> void,
  operationCallback: (operation:(memory:MemoryType) => MemoryType ) => void
}


export function Keyboard( props:KeyboardProps ){

  const [keyboardBuffer, setKeyboardBuffer] = useState<string>('');


  function handleDigit(keyName:string){

    // if keyboardBuffer is empty, push last result in stack
    // if(!keyboardBuffer){
    //   props.operationCallback( Operations.enter.exec );
    // }

    const updatedBuffer = keyboardBuffer + keyName;

    if(keyboardBuffer.length < Configs.MAX_DISPLAY_LENGHT){
      setKeyboardBuffer(updatedBuffer);
      props.udateWorkRegisterCallback(updatedBuffer)
    }
    

  }

  function clearBuffer(){
    setKeyboardBuffer('');
    props.udateWorkRegisterCallback('0');
  }

  function handleOperation(operation:(memory:MemoryType) => MemoryType){
    setKeyboardBuffer('');
    props.operationCallback( operation );
  }

  function handleEnterKey(){
    setKeyboardBuffer('');
    //props.enterDataCallback();
  }

  // function renderOperationKey(){

  // }

  return(
    <div className= 'keyboard-calc'>
      <div className='operation-keyboard'>
        <Key label='+' keyFunction={() => handleOperation(Operations.add.exec)} />
        <Key label='-' keyFunction={() => handleOperation(Operations.sub.exec)} />
        <Key label='x' keyFunction={() => handleOperation(Operations.mult.exec)} />
        <Key label='/' keyFunction={() => handleOperation(Operations.div.exec)} />
      </div>
      <div className = 'data-area'>
        <DigitKeyboard handleDigit = {handleDigit} />
        <div className='data-keyboard'>
          <Key label='C' keyFunction={clearBuffer} />
          <Key label='↵' keyFunction={handleEnterKey} />
        </div>
      </div>
    </div>
  )
}