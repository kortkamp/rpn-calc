// type OperationType = {
//   label:string,
//   exec: (stack:Array<number>) => Array<number>
// }

type MemoryType = {
  workRegister:number,
  stack:number[]
}



const addOperation = (memory:MemoryType) => { 

  const memoryCopy = Object.assign({},memory);

  let operand = memoryCopy.stack.shift();
  if(!operand){
    operand = 0;
  }
  memoryCopy.workRegister += operand;

  return memoryCopy;
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

