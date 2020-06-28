class Queue {
  count: number;
  lowersCount: number;
  items: {
    [key:number] : any;
  };

  constructor() {
    this.count = 0;
    this.lowersCount = 0;
    this.items = {};
  }

  enqueue(element:any) {
    this.items[this.count] = element;
    this.count ++;
  }

  isEmpty() {
    return this.count - this.lowersCount === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowersCount];
    delete this.items[this.lowersCount];
    this.lowersCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowersCount];
  }

  size() {
    return this.count - this.lowersCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowersCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowersCount]}`;
    for (let i = this.lowersCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
