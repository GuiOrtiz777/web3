import {describe, test, expect} from '@jest/globals';
import Block from '../src/lib/block';

describe("Block tests", () => {

  test('Should be valid', () => {
    const block = new Block(1, "first", 12, '1234');
    const valid = block.isValid();
    expect(valid).toEqual(true);
  })

  test('Should NOT be valid (hash)', () => {
    const block = new Block(1, "", 32, "");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  })

  test('Should NOT be valid (index)', () => {
    const block = new Block(-1, "first", 54, "genesis");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  })

  test('Should NOT be valid (nonce)', () => {
    const block = new Block(2, "first", -1, "genesis");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  })

  test('Should NOT be valid (prevHash)', () => {
    const block = new Block(2, "first", 54, "");
    const valid = block.isValid();
    expect(valid).toBeFalsy();
  })
})