function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.leftCount = 0;
}

BST.prototype.insert = function(value) {
  let node = new BST(value);
  if (value <= this.value) {
    if (!this.left) {
      node.leftCount = this.leftCount;
      this.left = node;
    } else {
      node = this.left.insert(value);
    }
    this.leftCount++;
  } else {
    if (!this.right) {
      node.leftCount = this.leftCount + 1;
      this.right = node;
    } else {
      node = this.right.insert(value);
    }
  }
  return node;
}

module.exports = BST;
