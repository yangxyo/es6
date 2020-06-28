class Deque {
  count: number;
  lowestCount: number;
  items: {
    [key:number]: any;
  }

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element:any) {
    this.items[this.count] = element;
    this.count ++;
  }

}
