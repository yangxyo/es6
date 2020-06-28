var _items = Symbol('stackItems');
var Stack = /** @class */ (function () {
    function Stack() {
        this[_items] = [];
    }
    // 添加一个新元素到栈顶
    Stack.prototype.push = function (element) {
        this[_items].push(element);
    };
    // 移除栈顶的元素，同时返回
    Stack.prototype.pop = function () {
        return this[_items].pop();
    };
    // 返回栈顶的元素
    Stack.prototype.peek = function () {
        return this[_items][this[_items].length - 1];
    };
    ;
    // 没有任何元素true，否则false
    Stack.prototype.isEmpty = function () {
        return this[_items].length === 0;
    };
    // 移除栈里的所有元素
    Stack.prototype.clear = function () {
        this[_items] = [];
    };
    // 返回栈里的元素个数
    Stack.prototype.size = function () {
        return this[_items].length;
    };
    Stack.prototype.print = function () {
        console.log(this.toString());
    };
    Stack.prototype.toString = function () {
        return this[_items].toString();
    };
    return Stack;
}());
function decimalToBinary(decNumber) {
    var remStack = new Stack();
    var tmp;
    var binaryString = '';
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
function getSymbol() {
    var stack = new Stack();
    return Object.getOwnPropertySymbols(stack);
}
function testSymbol() {
    var stack = new Stack();
    return stack[_items];
}
console.log(testSymbol());
console.log(decimalToBinary(233));
console.log(getSymbol()[0].valueOf());
