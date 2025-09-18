/**
 * A simple Hash Table implementation using buckets (arrays) to handle collisions.
 *
 * Day 1 scope:
 *  - constructor(size)
 *  - #hash(key)
 *  - set(key, value)
 *
 * Later days (commented out below):
 *  - get, has (Day 2)
 *  - remove, keys, values (Day 3)
 *  - entries (Day 4)
 */
class HashTable {
  /**
   * Creates a new HashTable with a fixed number of buckets.
   * Each bucket will be an array holding [key, value] pairs.
   * @param {number} [size=16] - Number of buckets (array length).
   */
  constructor(size = 16) {
    // TODO: Initialize this.buckets as an array of length `size`,
    // where each element is an empty array (the bucket).
    // Also store `size` on `this.size` for the hash function to use.
    // Example shape after init: [[/* pairs */], [/* pairs */], ...] 
    this.buckets = Array(size).fill(null).map(() => []);
    this.size = size;
  }

  /**
   * Hashes a string key into an index between 0 and this.size - 1.
   * Strategy: accumulate character codes and mod by table size.
   * @param {string} key
   * @returns {number} A bucket index.
   * @complexity O(k) where k is the key length
   */
  #hash(key) {
    // TODO: Start from 0 and for each character:
    //   - add `key.charCodeAt(i) * i` (or another simple mix)
    //   - take modulo `this.size` to stay within bounds
    // Return the final index.
     let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i) * i;
    }
    return hash % this.size;
  }
  

  /**
   * Inserts or updates a [key, value] pair in the appropriate bucket.
   * Steps:
   *  1) Compute the bucket index via #hash(key).
   *  2) Scan the bucket array:
   *     - If an entry with the same key exists, update its value and return.
   *  3) Otherwise, push a new pair [key, value] to the bucket.
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */
  set(key, value) {
    // TODO: Implement the logic described above using this.#hash and this.buckets
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  }

  /**
   * Retrieves the value for the given key, or undefined if not found.
   * @param {string} key
   * @returns {any|undefined}
   */
  get(key) {
    // TODO: hash → scan bucket → return matching value or undefined
    let result;
    let hash = this.#hash(key);
  }

  /**
   * Checks whether the given key exists in the table.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    // TODO: return true if get(key) !== undefined
  }
}

export { HashTable };