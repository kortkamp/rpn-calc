// type OperationType = {
//   label:string,
//   exec: (stack:Array<number>) => Array<number>
// }

type MemoryType = {
  workRegister:number,
  stack:number[]
}

type OperationType = {
  operation: (operand1:number,operand2:number) => number
}

const MathFunctions = {
  add:(operand1:number,operand2:number) => operand1 + operand2,
  sub:(operand1:number,operand2:number) => operand1 - operand2,
  mult:(operand1:number,operand2:number) => operand1 * operand2,
  div:(operand1:number,operand2:number) => operand1 / operand2
}


const operate = (
    memory:MemoryType, 
    operation: (operand1:number,operand2:number)=> number 
  ) => {
    
    const memoryCopy = Object.assign({},memory);

    let operand = memoryCopy.stack.shift();
    if(!operand){
      operand = 0;
    }
    //memoryCopy.workRegister += operand;

    memoryCopy.workRegister = operation(memoryCopy.workRegister , operand);

    return memoryCopy;

}

const addOperation = (memory:MemoryType) => { 

  return operate(memory,MathFunctions.add)
  
}

const subOperation = (memory:MemoryType) => { 
  const memoryCopy = Object.assign({},memory);

  let operand = memoryCopy.stack.shift();
  if(!operand){
    operand = 0;
  }
  memoryCopy.workRegister -= operand;
  
  return memoryCopy;
}

const multOperation = (memory:MemoryType) => { 
  const memoryCopy = Object.assign({},memory);

  let operand = memoryCopy.stack.shift();
  if(!operand){
    operand = 0;
  }
  memoryCopy.workRegister *= operand;
  
  return memoryCopy;
}

const divOperation = (memory:MemoryType) => { 
  const memoryCopy = Object.assign({},memory);

  let operand = memoryCopy.stack.shift();
  if(!operand){
    operand = 0;
  }
  memoryCopy.workRegister /= operand;
  
  return memoryCopy;
}


export const Operations = {
  enter:{
    label:'E',
    exec: (stack:Array<number>) => {
      const newStack = stack;
      newStack.unshift(stack[0])
      return newStack;
    }
  },
  add:{
    label:'+',
    exec: addOperation
  },
  sub:{
    label:'-',
    exec: subOperation
  },
  mult:{
    label:'*',
    exec: multOperation
  },
  div:{
    label:'/',
    exec: divOperation
  },

  test:{
    label:'?',
    exec: (stack:Array<number>) => {
    }
  },
  
}

