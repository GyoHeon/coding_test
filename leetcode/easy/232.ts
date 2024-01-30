class MyQueue {
  in: number[];
  out: number[];
  constructor() {
    this.in = [];
    this.out = [];
  }

  push(x: number): void {
    while (this.out.length) {
      const num = this.out.pop();
      this.in.push(num as number);
    }
    this.in.push(x);
  }

  pop(): number | null {
    while (this.in.length) {
      const num = this.in.pop();
      this.out.push(num as number);
    }
    const num = this.out.pop();
    if (num) return num;

    return null;
  }

  peek(): number | null {
    while (this.in.length) {
      const num = this.in.pop();
      this.out.push(num as number);
    }
    const num = this.out.pop();
    if (num) {
      this.out.push(num);
      return num;
    }

    return null;
  }

  empty(): boolean {
    if (this.in.length || this.out.length) return false;

    return true;
  }
}
