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
    this.setCalculatorBuffer = props.setBufferCallback;
    this.executeOperation = props.operationCallback;    
    
  }

  // ############ buffer operations ###############

  clearBuffer(){
    this.keyboardBufferString = '';
  };
  // send a clear command to calc
  clear(){
    this.clearBuffer();
    this.setCalculatorBuffer('0');
  }
  enterDigit(digit){
    // do not enter a 2nd dot
    if(digit === '.' && this.keyboardBufferString.includes('.'))
      return;
    
    if(this.keyboardBufferString.length <= 10){
      this.keyboardBufferString = this.keyboardBufferString + digit;
      this.setCalculatorBuffer(this.keyboardBufferString);
    }
  }

  callOperation(operation){
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

            {this.renderFunctionKey('√',() => this.callOperation('√'))}
            {this.renderFunctionKey('1/x',() => this.callOperation('1/x'))}
            {this.renderFunctionKey('x²',() => this.callOperation('x²'))}
            {this.renderFunctionKey('ch',() => this.callOperation('ch'))}

            {this.renderFunctionKey('+',() => this.callOperation('+'))}
            {this.renderFunctionKey('-',() => this.callOperation('-'))}
            {this.renderFunctionKey('x',() => this.callOperation('x'))}
            {this.renderFunctionKey('/',() => this.callOperation('/'))}

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
         
            {this.renderEnterKey(()=>this.callOperation('/n'))}
            
            
      </div>
    )
  }
}


class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //value to show in display
      buffer:'0',
      // stack of values entered
      stack:[]
    }
    this.buffer = 0;
  }
 
  setBuffer(value){


    this.setState({
      buffer:value
    })
  }

  operate(operator1, operator2, operation){
    console.log(operation)
    switch(operation){
      case '+':
        return operator1 + operator2;
      case '-':
        return operator1 - operator2;
      case 'x':
        return operator1 * operator2;
      case '/':
        //console.log(`tes: ${operator1} op ${operator2} = ${operator1/operator2}`)
        return operator1 / operator2;      
      default:
        return;
    }
  }

  operateStack(stack,operation){

    let operableStack = stack;

    let operator1 = operableStack.shift();
    if(!operator1) operator1 = 0;
    let operator2 = operableStack.shift();
    if(!operator2) operator2 = 0;

    operableStack.unshift(this.operate(operator1, operator2,operation))
    return operableStack;
  }

  // push buffer into stack and return new stack
  pushStack(){
    const newStack = [this.buffer].concat(this.state.stack);
    return newStack;
  }

  // pull first element from stack into buffer and return new stack
  pullStack(){
    const newStack = this.state.stack;
    this.buffer = newStack.shift();
    return newStack;
  }

  executeOperation(operation){

    const tempStack  = this.state.stack;
    let tempBuffer = Number(this.state.buffer);

    if(operation === '/n'){
      tempStack.push(Number(this.state.buffer))
    }
    else{
      let stackOperator = tempStack.pop();
      if(!stackOperator) stackOperator = 0;
      const result = this.operate(stackOperator, tempBuffer, operation);
      tempBuffer = result;
    }
    
    this.setState({
      buffer:String(tempBuffer),
      stack: tempStack
    })

  }
  
  
  //  ############ RENDERIZATION ###############

  renderStack(stackArray){
    
    return(
      <ul>
        {stackArray.map((element,index) => {return (<li key={index}>{element}</li>)})}
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
              setBufferCallback= {(value) => this.setBuffer(value)} 
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
