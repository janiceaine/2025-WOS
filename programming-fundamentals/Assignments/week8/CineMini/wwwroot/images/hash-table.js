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
        this.size = size;
        this.buckets = new Array(size);
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
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

        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
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
        const hash = this.#hash(key);
        for (const el of this.buckets[hash]) {
            if (el[0] === key) {
                el[1] = value;
                return;
            }
        }
        this.buckets[hash].push([key, value]);
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
        for (const el of this.buckets[hash]) {
            if (el[0] === key) {
                result = el[1];
                return result;
            }
        }
        return result;
    }

    /**
     * Checks whether the given key exists in the table.
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
    // TODO: return true if get(key) !== undefined
        let hash = this.#hash(key);
        for (const el of this.buckets[hash]) {
            if (el[0] === key) {
                return true;
            }
        }
        return false;
    }
}

// 🐐
export { HashTable };
