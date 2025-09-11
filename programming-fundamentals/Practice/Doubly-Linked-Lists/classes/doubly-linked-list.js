/**
 * Represents a node in a doubly linked list.
 * @class
 */
class DLLNode {
  /**
   * Creates a DLLNode.
   * @param {any} val - The value to store in the node.
   */
  constructor(val) {
    /** @type {any} */
    this.value = val;
    /** @type {DLLNode|null} */
    this.prev = null;
    /** @type {DLLNode|null} */
    this.next = null;
  }
}

/**
 * Doubly Linked List implementation.
 * @class
 */
class DoublyLinkedList {
  /**
   * Creates an empty doubly linked list.
   */
  constructor() {
    /** @type {DLLNode|null} */
    this.head = null;
    /** @type {DLLNode|null} */
    this.tail = null;
    /** @type {number} */
    this.length = 0;
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} True if the list has no elements; otherwise, false.
   * @complexity O(1)
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the number of elements in the list.
   * @returns {number} The size of the list.
   * @complexity O(1)
   */
  size() {
    return this.length;
  }

  /**
   * Inserts a new node with the given value at the head of the list.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtHead(val) {
    let node = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * Removes and returns the value at the head of the list.
   * @returns {any} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeHead() {
    if (this.isEmpty()) return null;
    let val = this.head.value;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return val;
  }

  /**
   * Inserts a new node with the given value at the tail of the list.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAtTail(val) {
    let node = new DLLNode(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  /**
   * Removes and returns the value at the tail of the list.
   * @returns {any} The value removed, or null if the list is empty.
   * @complexity O(1)
   */
  removeTail() {
    if (this.isEmpty()) return null;
    let val = this.tail.value;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return val;
  }

  /**
   * Finds the first node with the specified value.
   * @param {any} val - The value to search for.
   * @returns {DLLNode|null} The found node, or null if not found.
   * @complexity O(n)
   */
  find(val) {
    if (this.isEmpty()) return null;
    let runner = this.head;
    while (runner) {
      if (runner.value === val) return runner;
      runner = runner.next;
    }
    return null;
  }

  /**
   * Converts the list to an array of values.
   * @returns {Array<*>} An array containing all values in the list.
   * @complexity O(n)
   */
  toArray() {
    let result = [];
    if (this.isEmpty()) return result;
    let runner = this.head;
    while (runner) {
      result.push(runner.value);
      runner = runner.next;
    }
    return result;
  }
}

export { DoublyLinkedList };
