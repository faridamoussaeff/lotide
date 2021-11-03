const middle = require('../middle');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const { assert } = require('chai');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

  it("returns ['name', 'is'] for ['my', 'name', 'is', 'violet']", () => {
    assert.deepEqual(middle(['my', 'name', 'is', 'violet']), ['name', 'is']); 
  });
});


 