import { Key } from "./Key";

import '../styles/digitKeyboard.scss'

type DigitKeyboardProps = {
  handleDigit: (label:string) => void
}


export function DigitKeyboard(props: DigitKeyboardProps){

  function renderDigitKey(label:string){
    return(
      <Key label={label} keyFunction={() => props.handleDigit(label)} />
    )
  }
  return(
    <div className = 'digit-keyboard'>
      {renderDigitKey( "7" )}
      {renderDigitKey( "8" )}
      {renderDigitKey( "9" )}

      {renderDigitKey( "4" )}
      {renderDigitKey( "5" )}
      {renderDigitKey( "6" )}

      {renderDigitKey( "1" )}
      {renderDigitKey( "2" )}
      {renderDigitKey( "3" )}

      {renderDigitKey( "0" )}
      {renderDigitKey( "." )}
      {renderDigitKey( "E" )}
    </div>
  )
}