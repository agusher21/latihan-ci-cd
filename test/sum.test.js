// Tes sederhana untuk sum() — memakai node:test bawaan Node (tanpa dependensi).
const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('../src/sum');

describe('sum', () => {
  it('menjumlahkan dua bilangan positif', () => {
    assert.equal(sum(2, 3), 5);
  });

  it('menjumlahkan bilangan negatif', () => {
    assert.equal(sum(-4, 6), 2);
  });

  it('nol + nol = nol', () => {
    assert.equal(sum(0, 0), 0);
  });
});
