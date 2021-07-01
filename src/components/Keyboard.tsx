import { DigitKeyboard } from "./DigitKeyboard"
import { Key } from "./Key"

import '../styles/keyboard.scss'

type KeyboardProps = {
  digitCallback: (digit:string)=> void,
  operationCallback: (operation:string)=> void
}


export function Keyboard( props:KeyboardProps ){

  function handleDigit(keyName:string){
    props.digitCallback(keyName)
  }

  function handleOperation(){

  }

  return(
    <div className= 'keyboard-calc'>
      <div className='operation-keyboard'>
        <Key label='+' keyFunction={handleOperation} />
        <Key label='-' keyFunction={handleOperation} />
        <Key label='x' keyFunction={handleOperation} />
        <Key label='/' keyFunction={handleOperation} />
      </div>
      <DigitKeyboard handleDigit = {handleDigit} />
      <div className='data-keyboard'>
        <Key label='C' keyFunction={handleOperation} />
        <Key label='E' keyFunction={handleOperation} />
      </div>
    </div>
  )
}