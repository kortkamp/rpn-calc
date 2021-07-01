import { DigitKeyboard } from "./DigitKeyboard"


export function Keyboard(){

  function handleDigit(keyName:string){
    console.log(keyName)
  }


  

  return(
    <div className= 'keyboard-calc'>
      <div className= 'operation-keyboard'>
      
      </div>
      <DigitKeyboard handleDigit = {handleDigit} />
    </div>
  )
}