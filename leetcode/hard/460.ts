class LFUCache {
  private keyToVal: Map<number, number>;
  private keyToFreq: Map<number, number>;
  private freqToKeys: Map<number, Map<number, true>>;

  private minFreq: number;
  private cap: number;

  constructor(capacity: number) {
    this.minFreq = 0;
    this.cap = capacity;

    this.keyToVal = new Map();
    this.keyToFreq = new Map();
    this.freqToKeys = new Map();
  }

  private removeMinFreqKey() {
    const keyList = this.freqToKeys.get(this.minFreq)!;

    const lastKey = keyList.keys().next().value;

    keyList.delete(lastKey);

    if (!keyList.size) {
      this.freqToKeys.delete(this.minFreq);
    }

    this.keyToVal.delete(lastKey);
    this.keyToFreq.delete(lastKey);
  }

  private increaseFreq(key: number) {
    const freq = this.keyToFreq.get(key)!;

    this.keyToFreq.set(key, freq + 1);
    const oldKeyList = this.freqToKeys.get(freq)!;
    oldKeyList.delete(key);

    if (!this.freqToKeys.has(freq + 1)) {
      this.freqToKeys.set(freq + 1, new Map());
    }
    this.freqToKeys.get(freq + 1)!.set(key, true);

    if (!oldKeyList.size) {
      this.freqToKeys.delete(freq);
      if (freq === this.minFreq) this.minFreq++;
    }
  }

  get(key: number): number {
    if (!this.keyToVal.has(key)) return -1;

    this.increaseFreq(key);
    return this.keyToVal.get(key)!;
  }

  put(key: number, value: number): void {
    if (this.keyToVal.has(key)) {
      this.keyToVal.set(key, value);
      this.increaseFreq(key);
      return;
    }

    if (this.cap <= this.keyToVal.size) {
      this.removeMinFreqKey();
    }

    this.keyToVal.set(key, value);
    this.keyToFreq.set(key, 1);

    if (!this.freqToKeys.has(1)) {
      this.freqToKeys.set(1, new Map());
    }
    this.freqToKeys.get(1)!.set(key, true);
    this.minFreq = 1;
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
