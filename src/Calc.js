import React from 'react';

import './Calc.css';


function Screen(props){
  return(
    <div>
      <input id='calc-screen' type="text" className='screen' value={props.value} />
    </div>
  );
}

function Key(props){
  return(
    <button className='keyboard-button'>{props.label}</button>
  );
}

class Keyboard extends React.Component{
  render(){
    return(
      <div>
        <div className='key-numbers'>
          <div className='keyboard-row'>
            <Key label = {'7'}/>
            <Key label = {'8'}/>
            <Key label = {'9'}/>
          </div>
          <div className='keyboard-row'>
            <Key label = {'4'}/>
            <Key label = {'5'}/>
            <Key label = {'6'}/>
          </div>
          <div className='keyboard-row'>
            <Key label = {'1'}/>
            <Key label = {'2'}/>
            <Key label = {'3'}/>
          </div>
          <div className='keyboard-row'>
            <Key label = {'0'} class={'double-horizontal'}/>
            <Key label = {'.'}/>
            
          </div>
          
        </div>
      </div>
    )
  }
}


class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stack:[0,0,0,0]
    }
    
  }
 
  render(){
    return(
      <div className='calc'>
        <div className='screen-area'>
          <Screen 
            value = {this.state.stack[0]}
          />
        </div>
        <div className='keyboard-area'>
          <Keyboard />
        </div>
      </div>
    );
  }
}




export default Calc;
