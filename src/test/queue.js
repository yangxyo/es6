var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0;
        this.lowersCount = 0;
        this.items = {};
    }
    Queue.prototype.enqueue = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Queue.prototype.isEmpty = function () {
        return this.count - this.lowersCount === 0;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowersCount];
        delete this.items[this.lowersCount];
        this.lowersCount++;
        return result;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowersCount];
    };
    Queue.prototype.size = function () {
        return this.count - this.lowersCount;
    };
    Queue.prototype.clear = function () {
        this.items = {};
        this.count = 0;
        this.lowersCount = 0;
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return '';
        }
        var objString = "" + this.items[this.lowersCount];
        for (var i = this.lowersCount + 1; i < this.count; i++) {
            objString = objString + "," + this.items[i];
        }
        return objString;
    };
    return Queue;
}());
var queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
