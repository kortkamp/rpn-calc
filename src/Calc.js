import React from 'react';

import './Calc.css';

// change (make class) to show different fomats: fidex, exp , float
function Screen(props){
  return(
    <div className='calc-display'>
      {props.value}
    </div>
  );
}

function KeyDigit(props){
  return(
    <button className={'keyboard-button'} onClick={() => props.callback(props.label)}>{props.label} </button>
  );
}


function KeyEnter(props){
  return(
    <button className={'keyboard-button key-enter'} onClick={() => props.callback()} >E<br />N<br />T<br />E<br />R</button>
  )
}



class Keyboard extends React.Component{
  constructor(props){
    super(props);

    // keyboard holds its value as a string
    this.keyboardBufferString = '';
    //callbacks
    this.setDisplay = props.setDisplayCallback;
    this.executeOperation = props.operationCallback;
    this.enterOperation = props.enterCallback;
    
    
  }
  // ############ buffer operations ###############
  clearBuffer(){
    this.keyboardBufferString = '';
  };
  // send a clear command to calc
  clear(){
    this.clearBuffer();
    this.setDisplay(0);
  }
  enterDigit(digit){
    // do not enter a 2nd dot
    if(digit === '.' && this.keyboardBufferString.includes('.'))
      return;
    
    if(this.keyboardBufferString.length <= 10){
      this.keyboardBufferString = this.keyboardBufferString + digit;
      this.setDisplay(Number(this.keyboardBufferString));
    }
  }
  enter(){
    this.enterOperation(Number(this.keyboardBufferString));
    this.clearBuffer();
    
  }
  operate(operation){
    this.executeOperation(operation);
    this.clearBuffer();
  }
  //  ############ keys renderization ###############
  renderDigitKey(i){
    return <KeyDigit 
              label = {i} 
              callback = {() => this.enterDigit(i)} 
            />
  }
  renderFunctionKey(label,callback){
    return <KeyDigit 
              label = {label} 
              callback = {() => callback()} 
           />
  }
  renderEnterKey(callback){
    return <KeyEnter
              callback = {() => callback()}
            />
  }



  render(){
    return(
      <div className = 'keyboard'>
            {this.renderFunctionKey('+',() => this.operate('+'))}
            {this.renderFunctionKey('-',() => this.operate('-'))}
            {this.renderFunctionKey('x',() => this.operate('x'))}
            {this.renderFunctionKey('÷',() => this.operate('÷'))}

            {this.renderDigitKey(7)}
            {this.renderDigitKey(8)}
            {this.renderDigitKey(9)}
            {this.renderDigitKey('E')}
         
            {this.renderDigitKey(4)}
            {this.renderDigitKey(5)}
            {this.renderDigitKey(6)}
            
            {this.renderDigitKey(1)}
            {this.renderDigitKey(2)}
            {this.renderDigitKey(3)}
         
            {this.renderDigitKey(0)}
            {this.renderDigitKey('.')}
            {this.renderFunctionKey('C',() => this.clear())}
         
            {this.renderEnterKey(()=>this.enter())}
            
            
      </div>
    )
  }
}


class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //value to show in display
      buffer:0,
      // stack of values entered
      stack:[]
    }
    
  }
 
  setDisplay(value){
    this.setState({buffer:value})
    
  }

  operate(x,y,operation){
    switch(operation){
      case '+':
        return(x+y);
      case '-':
        return(x-y);
      case 'x':
        return(x*y);
      case '/':
          return(x/y);
      default:
          return 0;
    }
    
  }

  executeOperation(operation){
    const newStack = this.state.stack;
    let fromStackValue;

    // pull the last value inserted in stack
    if(newStack.length>1)
      fromStackValue = newStack.shift();
    else
      fromStackValue = newStack[0];

    const newBuffer = this.operate(fromStackValue, this.state.buffer,operation);
    this.setState({
      buffer:newBuffer,
      stack:newStack
    })
    
  }
  enterNumber(value){
    
    const newStack = [this.state.buffer].concat(this.state.stack);
    this.setState({stack:newStack})
    console.log(newStack)
    
  }
  
  renderStack(stackArray){
    
    return(
      <ul>
        {stackArray.map((element) => {return (<li key={element}>{element}</li>)})}
      </ul>
    )
  }

  render(){
    return(
      <div className='calculator-container'> 
        <div className='calculator'>
          <div className='screen-area'>
            <Screen 
              value = {this.state.buffer}
            />
          </div>
          <div className='keyboard-area'>
            <Keyboard 
              setDisplayCallback= {(value) => this.setDisplay(value)} 
              operationCallback= {(operation) => this.executeOperation(operation)}
              enterCallback= {(value) => this.enterNumber(value)}  
            />
          </div>
          <div className='stack-area'>
            <span>
              stack
            </span>
              {this.renderStack(this.state.stack)}
            </div>
          </div>
          
        </div>
        
    );
  }
}




export default Calc;
