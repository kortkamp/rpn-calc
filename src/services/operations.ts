// type OperationType = {
//   label:string,
//   exec: (stack:Array<number>) => Array<number>
// }


// get stack[0] and stack[1]  but drop stack[1]
const getTwoOperands = (stack:Array<number>) => {
  const newStack = stack;
  const operand1 = newStack[0];
  let [operand2] = newStack.splice(1,1);
  if(!operand2){
    operand2 = 0;
  }
  return [operand1,operand2,newStack]
}

const addOperation = (stack:Array<number>) => { 
  const [operand1, operand2, newStack] = getTwoOperands(stack) as [number,number,number[]]
  const result = operand2 + operand1;
  newStack[0] = result;
  return newStack;
}

const subOperation = (stack:Array<number>) => { 
  const [operand1, operand2, newStack] = getTwoOperands(stack) as [number,number,number[]]
  const result = operand2 - operand1;
  newStack[0] = result;
  return newStack;
}

const multOperation = (stack:Array<number>) => {
  const [operand1, operand2, newStack] = getTwoOperands(stack) as [number,number,number[]]
  const result = operand2 * operand1;
  newStack[0] = result;
  return newStack;
}

const divOperation = (stack:Array<number>) => {
  const [operand1, operand2, newStack] = getTwoOperands(stack) as [number,number,number[]]
  const result = operand2 / operand1;
  newStack[0] = result;
  return newStack;
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
    label:'*',
    exec: subOperation
  },
  mult:{
    label:'*',
    exec: multOperation
  },
  div:{
    label:'*',
    exec: divOperation
  },

  test:{
    label:'?',
    exec: (stack:Array<number>) => {
    }
  },
  
}

