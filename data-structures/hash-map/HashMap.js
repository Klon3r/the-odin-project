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

  /**
   * @description Takes one arugment as a key and returns the value that is assigned to this key
   * @param {int} key
   * @returns {string|null } Returns a string if key is found else returns null
   */
  get(key) {
    if (this.hashmap[key] !== "" && this.hashmap[key] !== undefined) {
      return this.hashmap[key];
    } else {
      return null;
    }
  }

  /**
   * @description takes a key as an agrument and returns true or false based on weather or not the key is in the hash map
   * @param {string} key
   * @returns {boolean} Returns true if found in the hash map else return false
   */
  has(key) {
    const iterator = this.hashmap.keys();

    for (const value of iterator) {
      if (value.toString() === key) {
        return true;
      }
    }

    return false;
  }

  /**
   * @description Takes a key as an argument. If the given key is in the hash map, delete and return true else return false
   * @param {string} key
   * @returns {boolean} Return true if key is in the hash map else return false
   */
  remove(key) {
    if (this.hashmap[key] !== "" && this.hashmap[key] !== undefined) {
      this.hashmap.splice(key, 1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * @description Returns the number of stored keys in the hash map.
   * @returns {int} The length of the hash map
   */
  length() {
    let filtHash = this.hashmap.filter((element) => element != "");
    return filtHash.length;
  }

  /**
   * @description Removes all entries in the hash map;
   */
  clear() {
    this.hashmap = [];
  }

  /**
   * @description Return an array containing all the keys inside the hash map
   * @returns {array} An array of keys
   */
  keys() {
    let keyArray = [];
    const iterator = this.hashmap.keys();
    for (const key of iterator) {
      if (this.hashmap[key] != "" && this.hashmap[key] != undefined) {
        keyArray.push(key);
      }
    }

    return keyArray;
  }

  /**
   * @description Return an array containing all the values
   * @returns {array} An array containing all the values of hashmap
   */
  values() {
    let values = [];
    const iterator = this.hashmap.keys();

    for (const key of iterator) {
      if (this.hashmap[key] != "" && this.hashmap[key] != undefined) {
        values.push(this.hashmap[key]);
      }
    }

    return values;
  }

  /**
   * @description Return an array that contains each key, value pair.
   * @returns {array} The key, value pairs
   */
  entries() {
    let array = [];
    const iterator = this.hashmap.keys();

    for (const key of iterator) {
      if (this.hashmap[key] != "" && this.hashmap[key] != undefined) {
        array.push(`[${key}, ${this.hashmap[key]}]`);
      }
    }

    return array;
  }
}
