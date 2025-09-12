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
   * Inserts a new node with the given value before the specified node.
   * @param {DLLNode} node - The node before which to insert.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertBefore(node, val) {
    if (!node) return;
    const newNode = new DLLNode(val);

    if (node === this.head) {
      newNode.next = node;
      node.prev = newNode;
      this.head = newNode;
      this.length++;
      return;
    }

    const prev = node.prev;
    if (prev) prev.next = newNode;
    newNode.prev = prev;
    newNode.next = node;
    node.prev = newNode;
    this.length++;
  }

  /**
   * Inserts a new node with the given value after the specified node.
   * @param {DLLNode} node - The node after which to insert.
   * @param {any} val - The value to insert.
   * @returns {void}
   * @complexity O(1)
   */
  insertAfter(node, val) {
    if (!node) return;
    const newNode = new DLLNode(val);

    if (node === this.tail) {
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
      this.length++;
      return;
    }

    const next = node.next;
    newNode.next = next;
    newNode.prev = node;
    node.next = newNode;
    if (next) next.prev = newNode;
    this.length++;
  }

  /**
   * Removes the first node with the specified value from the list.
   * @param {any} val - The value to remove.
   * @returns {boolean} True if a node was removed; otherwise, false.
   * @complexity O(n)
   */
  remove(val) {
    // TODO:
    // 1. Find the node containing the given value.
    let node = this.find(val);
    // 2. If not found, return false.
    if (node == null) return false;
    // 3. If the node is the only node (head and tail), clear head and tail.
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return true;
    }
    // 4. If the node is the head, update head and fix links.
    if (node == this.head) {
      this.removeHead();
      return true;
    }
    // 5. If the node is the tail, update tail and fix links.
    if (node == this.tail) {
      this.removeTail();
      return true;
    }
    // 6. Otherwise, unlink the node from its previous and next nodes.
    node.prev.next = node.next;
    node.next.prev = node.prev;
    // 7. Decrement length and return true.
    this.length--;
    return true;
  }

  /**
   * Reverses the order of the nodes in the list in-place.
   * @returns {void}
   * @complexity O(n)
   */
  reverse() {
    // TODO:
    // 1. If the list is empty or has one node, do nothing.
    if (this.isEmpty() || this.length == 1) return;
    // 2. Iterate through each node, swapping its prev and next pointers.
    let runner = this.head;
    while (runner) {
      let temp = runner.next;
      runner.next = runner.prev;
      runner.prev = temp;
      runner = temp;
    }
    // 3. After iteration, swap the head and tail references.
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
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
