const BST = require('./bst');

function smaller(arr) {
  const bst = new BST(arr[arr.length-1]);
  const output = [];
  for (let i = arr.length - 2; i >= 0; i--) {
    let node = bst.insert(arr[i]);
    output[i] = node.leftCount;
  }
  output[arr.length-1] = 0;
  return output;
}

module.exports = smaller;
