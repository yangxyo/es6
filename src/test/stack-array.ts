const _items = Symbol('stackItems');

interface Stack {
  [_items]: any[];
}

class Stack {
  constructor() {
    this[_items] = [];
  }
  // 添加一个新元素到栈顶
  push(element:any){
    this[_items].push(element);
  }
  // 移除栈顶的元素，同时返回
  pop() {
    return this[_items].pop();
  }
  // 返回栈顶的元素
  peek() {
    return this[_items][this[_items].length - 1];
  };
  // 没有任何元素true，否则false
  isEmpty() {
    return this[_items].length === 0;
  }
  // 移除栈里的所有元素
  clear() {
    this[_items] = [];
  }
  // 返回栈里的元素个数
  size() {
    return this[_items].length;
  }

  print() {
    console.log(this.toString());
  }

  toString() {
    return this[_items].toString();
  }
}

function decimalToBinary(decNumber:number) {
  const remStack = new Stack();
  let tmp:number;
  let binaryString = '';

  while (decNumber > 0) {
    tmp = Math.floor(decNumber % 2);
    remStack.push(tmp);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

function getSymbol(){
  const stack = new Stack();
  return Object.getOwnPropertySymbols(stack);
}

function testSymbol() {
  const stack = new Stack();
  return stack[_items];
}
console.log(testSymbol());
console.log(decimalToBinary(233));
console.log(getSymbol()[0]);

