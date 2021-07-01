import { DigitKeyboard } from "./DigitKeyboard"
import { Key } from "./Key"

import '../styles/keyboard.scss'

export function Keyboard(){

  function handleDigit(keyName:string){
    console.log(keyName)
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