class LRUCache {
  private cap: number;
  private map: { [key: number]: DoubleNode };
  private cache: DoubleList;
  constructor(capacity: number) {
    this.cap = capacity;
    this.map = {};
    this.cache = new DoubleList();
  }

  private makeRecently(key: number) {
    const node = this.map[key];
    this.cache.remove(node);
    this.cache.addLast(node);
  }

  private addRecently(key: number, value: number) {
    const node = new DoubleNode(key, value);
    this.cache.addLast(node);
    this.map[key] = node;
  }

  private deleteKey(key: number) {
    const node = this.map[key];
    this.cache.remove(node);
    delete this.map[key];
  }

  private removeLeastRecently() {
    const node = this.cache.removeFirst();
    delete this.map[node.key];
  }

  get(key: number): number {
    if (typeof this.map[key] === "undefined") {
      return -1;
    }
    this.makeRecently(key);
    return this.map[key]["value"];
  }

  put(key: number, value: number): void {
    if (typeof this.map[key] === "undefined") {
      if (this.cache.size === this.cap) {
        this.removeLeastRecently();
      }
      this.addRecently(key, value);

      return null;
    }
    this.deleteKey(key);
    this.addRecently(key, value);

    return null;
  }
}

class DoubleNode {
  key: number;
  value: number;
  public prev: DoubleNode;
  public next: DoubleNode;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class DoubleList {
  private head: DoubleNode;
  private tail: DoubleNode;
  size: number;
  constructor() {
    this.head = new DoubleNode(-1, -1);
    this.tail = new DoubleNode(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addLast(node: DoubleNode) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }

  remove(node: DoubleNode) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  removeFirst() {
    if (this.head.next === this.tail) return null;
    const first = this.head.next;
    this.remove(first);
    return first;
  }

  getSize() {
    return this.size;
  }
}
