declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  if (!this.length) return -1;
  return this.at(-1);
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};
