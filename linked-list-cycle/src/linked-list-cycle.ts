export class Node {
  value: number;
  next: Node;

  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}

export class LinkedList {
  head: Node;
  tail: Node;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * add
   * The complexity of this method is O(n)
   * TODO: improve it to O(1)
   * @param val The value for the new Node
   * 
   */
  add(val: number) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  addToHead(arr: number[], pos: number) {
    if (!arr.length || this.head !== null) return;

    let counter = 0;
    let endNode: Node = null;

    do {
      const newNode = new Node(arr[counter]);

      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }

      if (counter === pos) {
        endNode = newNode;
      }
      counter++;
    } while (counter < arr.length);

    this.tail.next = endNode;
  }

  print() {
    // if (!this.head || this.isCycled()) return "";

    let current = this.head;
    const values = [current.value];

    while (current.next) {
      current = current.next;
      values.push(current.value);
    }

    return values.join(" -> ");
  }

  isCycled(): boolean {
    return false;
  }
}

const values = [3, 2, 0, -4];
const list = new LinkedList();
