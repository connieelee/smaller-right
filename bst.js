function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.size = 1;
}

BST.prototype.insert = function(value) {
  let leftCount = 0;
  this.size++;
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else leftCount += this.left.insert(value);
  } else {
    leftCount += (this.left ? this.left.size : 0) + 1;
    if (!this.right) this.right = new BST(value);
    else leftCount += this.right.insert(value);
  }
  return leftCount;
}

module.exports = BST;
