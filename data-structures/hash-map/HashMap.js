export class HashMap {
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
}
