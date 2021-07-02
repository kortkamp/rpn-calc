# RPN Calculator build using React.js

RPN Calculator system differs a little bit from algebraic system, in RPN we input the values in a stack then we input the operation what get operands from stack and put the result in stack to be used in other operations.

## Order of input keys in both systems:

Algebraic              | RPN
-----------            | -----------
1 + 2 =                | 1 ↵ 2 +
2 + 3 * 4 =            | 3 ↵ 4 * 2 +  
( 2 + 2 ) * (1 + 1) =  | 2 ↵ 2 + 1 ↵ 1 + *

## stack operation requires:
- stack[0] is the accumulator, values wrote in this position must update the display
- stack[1] must always exists, if an operation 