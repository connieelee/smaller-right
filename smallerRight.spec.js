let expect = require('chai').expect;
let smaller = require('./smallerRight.js');

describe('smallerRight', () => {
  describe('works for simple test cases', () => {
    it('when sorted', () => {
      expect(smaller([5, 4, 3, 2, 1])).to.deep.equal([4, 3, 2, 1, 0]);
      expect(smaller([1, 2, 3])).to.deep.equal([0, 0, 0]);
    });

    it('small samples', () => {
      expect(smaller([1, 2, 0])).to.deep.equal([1, 1, 0]);
      expect(smaller([1, 2, 1])).to.deep.equal([0, 1, 0]);
    });

    it('negative numbers', () => {
      expect(smaller([1, 1, -1, 0, 0])).to.deep.equal([3, 3, 0, 0, 0]);
    });

    it('longer sample, repeating values', () => {
      expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).to.deep.equal([4, 1, 5, 5, 0, 0, 0, 0, 0]);
    });
  });

  describe('works for randomized test cases', () => {

    function randArrInRange(arrSize, min, max) {
      const arr = [];
      for (let i = 0; i < arrSize; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
      }
      return arr;
    };

    function naiveSmallerSolution(arr) {
      return arr.map((val, i) => {
        let smaller = 0;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[i]) smaller++;
        }
        return smaller;
      });
    }

    it('of size 500', () => {
      const arr = randArrInRange(500, -20, 20);
      expect(smaller(arr)).to.deep.equal(naiveSmallerSolution(arr));
    });

    it('of size 10k', () => {
      const arr = randArrInRange(10000, -20, 20);
      expect(smaller(arr)).to.deep.equal(naiveSmallerSolution(arr));
    });

    it('of size 30k', () => {
      const arr = randArrInRange(30000, -20, 20);
      expect(smaller(arr)).to.deep.equal(naiveSmallerSolution(arr));
    });
  });
});