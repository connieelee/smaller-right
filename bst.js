function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.size = 1;
}

BST.prototype.insert = function(value) {
  let nSmaller = 0;
  this.size++;
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else nSmaller += this.left.insert(value);
  } else {
    nSmaller += (this.left ? this.left.size : 0) + 1;
    if (!this.right) this.right = new BST(value);
    else nSmaller += this.right.insert(value);
  }
  return nSmaller;
}

module.exports = BST;
