import React from 'react';

import './Calc.css';


function Screen(props){
  return(
    <div className='calc-display'>
      {props.value}
    </div>
  );
}

function Key(props){
  let className = '';
  if(props.className)
    className = ' ' + props.className;
  return(
    <button className={'keyboard-button' + className} >{props.label} </button>
  );
}

function KeyDigit(props){
  return(
    <button className={'keyboard-button'} onClick={() => props.callback(props.label)}>{props.label} </button>
  );
}


function KeyEnter(props){
  return(
    <button className={'keyboard-button key-enter'}>E<br />N<br />T<br />E<br />R</button>
  )
}

class Keyboard extends React.Component{
  constructor(props){
    super(props);

    // keyboard holds its value as a string
    this.value = '';
    this.setDisplay = props.setDisplayCallback;
    this.executeOperation = props.executeOperationCallback;
    
    
  }
  clear(){
    this.value = '';
    this.setDisplay(0);
  }
  enterDigit(digit){
    console.log(this.value.length)

    // do not enter a 2nd dot
    if(digit === '.' && this.value.includes('.'))
      return;
    
    if(this.value.length <= 10){
      this.value = this.value + digit;
      this.setDisplay(Number(this.value));
    }
  }
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
  render(){
    return(
      <div className = 'keyboard'>
        
            <Key label = {'+'}/>
            <Key label = {'-'}/>
            <Key label = {'x'}/>
            <Key label = {'÷'}/>

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
         

            <KeyEnter label = {'ENTER'} className= {'key-enter'}/>
            
      </div>
    )
  }
}


class Calc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //value to show in display
      displayValue:0,
      // stack of values entered
      stack:[0]
    }
    
  }
 
  setDisplay(value){
    this.setState({displayValue:value})
  }

  executeOperation(operation){

  }

  render(){
    return(
      <div className='calculator'>
        <div className='screen-area'>
          <Screen 
            value = {this.state.displayValue}
          />
        </div>
        <div className='keyboard-area'>
          <Keyboard setDisplayCallback={(value) => this.setDisplay(value)} operationCallback={() => this.executeOperation}/>
        </div>
      </div>
    );
  }
}




export default Calc;
