/** @typedef {import('./bst-node.mjs').BSTNode} BSTNode */

import { BSTNode } from "./bst-node.mjs";

/**
 * Represents a Binary Search Tree (BST).
 * The BST stores nodes in an ordered structure where all values in the left subtree
 * are less than the parent node and all values in the right subtree are greater.
 */
class BinarySearchTree {
  /**
   * Creates a new empty Binary Search Tree.
   * @property {BSTNode|null} root - The root node of the tree. Initially null.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Recursively inserts a value into the BST while maintaining the BST invariant.
   *
   * Duplicate policy: If the value is already present in the tree, this method
   * will ignore the insertion (no duplicates are stored).
   * @param {number} value - The value to insert.
   * @returns {void}
   */
  insert(value) {
    // Delegate to recursive helper that returns the (possibly new) subtree root.
    this.root = this.#insertRec(this.root, value);
  }

  /**
   * Recursive insert helper.
   * @param {BSTNode|null} node
   * @param {number} value
   * @returns {BSTNode} The updated subtree root.
   */
  #insertRec(node, value) {
    if (node === null) return new BSTNode(value);
    if (value < node.value) {
      node.left = this.#insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this.#insertRec(node.right, value);
    }
    return node;
  }

  /**
   * Determines whether the BST contains a target value.
   * @param {number} value - The value to search for.
   * @returns {boolean} True if found, otherwise false.
   */
  contains(value) {
    return this.#containsRec(this.root, value);
  }

  /**
   * Recursive search helper.
   * @param {BSTNode|null} node
   * @param {number} value
   * @returns {boolean}
   */
  #containsRec(node, value) {
    if (node === null) return false;
    if (value === node.value) return true;
    return value < node.value
      ? this.#containsRec(node.left, value)
      : this.#containsRec(node.right, value);
  }

  /**
   * Returns the smallest value in the tree.
   * @returns {number|null} The minimum value, or null if the tree is empty.
   */
  min() {
    if (!this.root) return null;

    let curr = this.root;

    while (curr.left) {
      curr = curr.left;
    }

    return curr.value;
  }

  /**
   * Returns the largest value in the tree.
   * @returns {number|null} The maximum value, or null if the tree is empty.
   */
  max() {
    if (!this.root) return null;

    let curr = this.root;

    while (curr.right) {
      curr = curr.right;
    }

    return curr.value;
  }

  /**
   * Performs an in-order traversal (Left → Root → Right).
   * For a BST, this yields sorted values in ascending order.
   * @returns {number[]} The values visited in in-order sequence.
   */
  inOrder() {
    const result = [];
    this.#inOrderRec(this.root, result);
    return result;
  }

  /**
   * In-order traversal helper (L → Root → R).
   * @param {BSTNode|null} node
   * @param {number[]} out
   * @returns {void}
   */
  #inOrderRec(node, out) {
    // TODO: Traverse left, push node.value, traverse right.
    if (!node) return;

    this.#inOrderRec(node.left, out);

    out.push(node.value);

    this.#inOrderRec(node.right, out);
  }

  /**
   * Performs a pre-order traversal (Root → Left → Right).
   * Useful for copying the tree or prefix expression output.
   * @returns {number[]} The values visited in pre-order sequence.
   */
  preOrder() {
    const result = [];
    this.#preOrderRec(this.root, result);
    return result;
  }

  /**
   * Pre-order traversal helper (Root → L → R).
   * @param {BSTNode|null} node
   * @param {number[]} out
   * @returns {void}
   */
  #preOrderRec(node, out) {
    if (!node) return;

    out.push(node.value);

    this.#preOrderRec(node.left, out);

    this.#preOrderRec(node.right, out);
  }

  /**
   * Performs a post-order traversal (Left → Right → Root).
   * Useful for deleting/freeing nodes or postfix expression output.
   * @returns {number[]} The values visited in post-order sequence.
   */
  postOrder() {
    const result = [];
    this.#postOrderRec(this.root, result);
    return result;
  }

  /**
   * Post-order traversal helper (L → R → Root).
   * @param {BSTNode|null} node
   * @param {number[]} out
   * @returns {void}
   */
  #postOrderRec(node, out) {
    if (!node) return;

    this.#postOrderRec(node.left, out);

    this.#postOrderRec(node.right, out);

    out.push(node.value);
  }

  /**
   * Computes the height (max depth) of the tree.
   * Height of an empty tree is 0; a single node tree is 1.
   * @returns {number} The height of the BST.
   */
  height() {
    return this.#heightRec(this.root);
  }

  /**
   * Height helper: 0 for null; else 1 + max(left, right).
   * @param {BSTNode|null} node
   * @returns {number}
   */
  #heightRec(node) {
    if (!node) return 0;

    let heightLeft = this.#heightRec(node.left);
    let heightRight = this.#heightRec(node.right);

    return 1 + Math.max(heightLeft, heightRight);
  }

  /**
   * Validates that the current tree satisfies the BST invariant (Left < Node < Right) globally.
   * @returns {boolean} True if valid, otherwise false.
   */
  isValidBST() {
    return this.#isValidBSTRec(this.root, -Infinity, Infinity);
  }

  /**
   * Validates BST using min/max bounds propagated down the tree.
   * @param {BSTNode|null} node
   * @param {number} min
   * @param {number} max
   * @returns {boolean}
   */
  #isValidBSTRec(node, min, max) {
    // TODO: Return false if node.value ≤ min or ≥ max; recurse with updated bounds.
    if (node === null) return true;
    if (node.value < max && node.value > min) {
      return this.#isValidBSTRec(node.left, min, node.value) && this.#isValidBSTRec(node.right, node.value, max)
    }
    return false;
  }

  /**
   * Removes a value from the BST, if present.
   * Must correctly handle nodes with 0, 1, or 2 children.
   * @param {number} value - The value to remove.
   * @returns {void}
   */
  remove(value) {
    this.root = this.#removeRec(this.root, value);
  }

  /**
   * Recursive remove helper handling 0/1/2 children.
   * @param {BSTNode|null} node
   * @param {number} value
   * @returns {BSTNode|null}
   */
  #removeRec(node, value) {
    // TODO: Standard delete logic.
    // handle case where value does not exist
    if (node === null) return null;
    // if value is less than current node's value, recurse left
    if (value < node.value) {
      node.left = this.#removeRec(node.left, value);
      return node;
    }
    // if value is greater than current node's value, recurse right
    else if (value > node.value) {
      node.right = this.#removeRec(node.right, value);
      return node;
    }
    // if value is equal to current node's value, we found the node
    else {
      // 0 children: set parent's pointer to null
      if (!node.left && !node.right) return null;
      // 1 child: replace with only child
      if (!node.left) return node.right;
      else if (!node.right) return node.left;
      // 2 children: replace with in order successor (min of right subtree)
      const successor = this.#minNode(node.right);
      node.value = successor.value;
      node.right = this.#removeRec(node.right, successor.value);
      return node;
    }
  }

  /**
   * Finds the inorder successor (the next larger value) of a given value in the BST.
   * @param {number} value - The reference value whose successor is sought.
   * @returns {number|null} The next larger value, or null if none exists.
   */
  findSuccessor(value) {
    // Option B: Walk from root tracking the last greater ancestor.
    return this.#findSuccessorFromRoot(this.root, value);
  }

  /**
   * Finds successor by walking from the root and tracking candidate.
   * @param {BSTNode|null} root
   * @param {number} value
   * @returns {number|null}
   */
  #findSuccessorFromRoot(root, value) {
    // TODO: While current exists, update candidate when going left on current.value > value.
    throw new Error("not implemented");
  }

  /**
   * Returns the node with the minimum value in a non-empty subtree.
   * @param {BSTNode} node
   * @returns {BSTNode}
   */
  #minNode(node) {
    // TODO: Walk left until null.
    throw new Error("not implemented");
  }

  /**
   * Checks whether the tree is height-balanced (AVL-style).
   * For every node, the heights of left and right subtrees differ by at most 1.
   * @returns {boolean} True if balanced, false otherwise.
   */
  isBalanced() {
    const info = this.#checkBalance(this.root);
    return info.balanced;
  }

  /**
   * Bottom-up balance checker.
   * Compute left/right first, then this node.
   * A subtree is balanced if both children are balanced AND
   * |left.height - right.height| <= 1.
   * @param {BSTNode|null} node
   * @returns {{balanced: boolean, height: number}}
   */
  #checkBalance(node) {
    // TODO: Post-order: compute left/right info; node is balanced if both balanced and |hl-hr| <= 1.
    // return { balanced: true, height: 0 };
    if (!node) {
      return { balanced: true, height: 0 };
    }
    // TODO: Compute left/right info first; this node is balanced
    // if both children are balanced and Math.abs(left.height - right.height) <= 1.
    // Return { balanced, height } upward.
    let left = this.#checkBalance(node.left);
    let right = this.#checkBalance(node.right);
    
    let balanced = Math.abs(left.height - right.height) <= 1 && left.balanced && right.balanced;
    
    let height = this.#heightRec(node);
    
    return { balanced, height };
  }


  /**
   * (Optional stretch) Rebalances the tree into a near-perfectly balanced form.
   * Typical approach: collect values via inOrder() then build a balanced BST from the sorted array.
   * @returns {void}
   */
  rebalance() {
    // Optional: collect sorted values then rebuild.
    // const sorted = this.inOrder();
    // this.root = this.#buildBalancedFromSorted(sorted, 0, sorted.length - 1);
  }

  /**
   * Builds a balanced BST from a sorted array slice [lo..hi].
   * @param {number[]} arr
   * @param {number} lo
   * @param {number} hi
   * @returns {BSTNode|null}
   */
  #buildBalancedFromSorted(arr, lo, hi) {
    // TODO: Middle element as root; recurse on left/right slices.
    throw new Error("not implemented");
  }

  /**
   * Prints the tree sideways in the console, with the root on the left and deeper
   * levels extending to the right.
   *
   * Example output:
   *  │           ┌── 10
   *  │       ┌── 9
   *  │       │   └── 8
   *  │   ┌── 7
   *  │   │   └── 6
   *  └── 5
   *      │   ┌── 4
   *      └── 3
   *          │   ┌── 2
   *          └── 1
   *              └── 0
   *
   * @param {BSTNode|null} node - The node to start printing from (defaults to root).
   * @param {string} prefix - String used internally for spacing/branching.
   * @param {boolean} isLeft - Whether this node is a left child (affects branch symbol).
   * @returns {void}
   */
  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

// test("print tree diagram", () => {
//   const tree = new BinarySearchTree();
//   [10, 5, 15, 3, 7, 12, 18].forEach(v => tree.insert(v));

//   // Print sideways tree in console
//   tree.prettyPrint();

//   expect(tree.contains(10)).toBe(true);

// });

export { BinarySearchTree };
