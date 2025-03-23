class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}   
  
function canReachLeaf(root) {
    if (root == null || root.val == 0) {
        return false;
    } 
    if (root.left == null && root.right == null) {
        return true;
    }
    if (canReachLeaf(root.left)) {
        return true;
    }
    if (canReachLeaf(root.right)) {
        return true;
    }
    return false;
}

/**
 * Finds a path from the root to a leaf node in a binary tree.
 * 
 * @param {Object} root - The root node of the binary tree.
 * @param {Array} path - An array to store the path from the root to the leaf node.
 * @returns {boolean} - Returns true if a path to a leaf node is found, otherwise false.
 * 
 * @example
 * const root = {
 *   val: 1,
 *   left: { val: 2, left: null, right: null },
 *   right: { val: 3, left: null, right: null }
 * };
 * const path = [];
 * const result = leafPath(root, path);
 * console.log(result); // true
 * console.log(path); // [1, 2] or [1, 3]
 */
function leafPath(root, path) {
    if (root == null || root.val == 0) {
        return false;
    }
    path.push(root.val);

    if (root.left == null && root.right == null) {
        return true;
    }
    if (leafPath(root.left, path)) {
        return true;
    }
    if (leafPath(root.right, path)) {
        return true;
    }
    path.remove(path.size() - 1);
    return false;
}