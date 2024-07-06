export class HashMap {
  constructor() {
    this.hashmap = [];
    this.bucketLength = 8;
  }

  /**
   * @description Take a key and produce a hash code with it
   * @param {string} key
   * @returns {int} The key hashed into a code
   */
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  /**
   * @description Set the key/value into the hash map
   * @param {string|int} key The key of the key value pair
   * @param {string|int} value The value of the key value pair
   */
  set(key, value) {
    const keyHash = this.hash(key);
    const bucket = keyHash % this.bucketLength;

    // Check the hashmap with the load factor and increase if needed
    const load = this.hashmap.filter((key) => key != "");
    if (load.length >= Math.floor(this.bucketLength * 0.75)) {
      this.bucketLength = this.bucketLength * 2;
      console.info("The new bucket size is...", this.bucketLength);
    }

    if (this.hashmap[bucket] !== undefined) {
      const oldValue = this.hashmap[bucket];
      console.error(`${oldValue} is being overwritten with ${value}`);
      this.hashmap[bucket] = value;
    } else {
      this.hashmap[bucket] = value;
    }
  }
}
