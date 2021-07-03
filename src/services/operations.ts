// type OperationType = {
//   label:string,
//   exec: (stack:Array<number>) => Array<number>
// }

type MemoryType = {
  workRegister:number,
  stack:number[]
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



export const Operations = {
  
  add:{
    label:'+',
    exec: (memory:MemoryType) => operate(memory , MathFunctions.add)
  },
  sub:{
    label:'-',
    exec: (memory:MemoryType) => operate(memory , MathFunctions.sub)
  },
  mult:{
    label:'*',
    exec: (memory:MemoryType) => operate(memory , MathFunctions.mult)
  },
  div:{
    label:'/',
    exec: (memory:MemoryType) => operate(memory , MathFunctions.div)
  },

  test:{
    label:'?',
    exec: (stack:Array<number>) => {
    }
  },
  
}

