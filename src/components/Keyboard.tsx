import { useState } from "react"

import { DigitKeyboard } from "./DigitKeyboard"
import { Key } from "./Key"
import { Configs } from '../configs'

import {Operations} from '../services/Operations'

import '../styles/keyboard.scss'

type KeyboardProps = {
  enterDataCallback: (digit:string)=> void,
  operationCallback: (operation:(stack:number[]) => number[] ) => void
}


export function Keyboard( props:KeyboardProps ){

  const [keyboardBuffer, setKeyboardBuffer] = useState<string>('');


  function handleDigit(keyName:string){

    // if keyboardBuffer is empty, push last result in stack
    if(!keyboardBuffer){
      props.operationCallback( Operations.enter.exec );
    }

    const updatedBuffer = keyboardBuffer + keyName;

    if(keyboardBuffer.length <= Configs.MAX_DISPLAY_LENGHT){
      setKeyboardBuffer(updatedBuffer);
    }
    props.enterDataCallback(updatedBuffer)

  }

  function clearBuffer(){
    setKeyboardBuffer('');
    props.enterDataCallback('0');
  }

  function handleOperation(operation:(stack:number[]) => number[]){
    setKeyboardBuffer('');
    props.operationCallback( operation );
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
      <DigitKeyboard handleDigit = {handleDigit} />
      <div className='data-keyboard'>
        <Key label='C' keyFunction={clearBuffer} />
        <Key label='↵' keyFunction={() => handleOperation(Operations.enter.exec)} />
      </div>
    </div>
  )
}