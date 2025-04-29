import {describe, test, expect} from '@jest/globals';
import Blockchain from '../src/lib/blockchain';
import Block from '../src/lib/block';

describe("Blockchain tests", () => {

  test('Should has genesis blocks', () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  })

  test('Should be Valid (genesis)', () => {
    const blockchain = new Blockchain();
    expect(blockchain.isValid()).toEqual(true);
  })

  test('Should be Valid (two blocks)', () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(
      new Block(1, blockchain.blocks[0].hash,
        "Block 2"
      )
    )
    expect(blockchain.isValid()).toEqual(true);
  })

  test('Should NOT be Valid', () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(
      new Block(1, blockchain.blocks[0].hash,
        "Block 2"
      )
    )
    blockchain.blocks[1].data = "A transfer to B"
    expect(blockchain.isValid()).toEqual(false);
  })

  test('Should add block', () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(
      new Block(1, blockchain.blocks[0].hash,
        "Block 2"
      )
    )
    expect(result).toEqual(true);
  })

  test('Should NOT add block', () => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(
      new Block(-1, blockchain.blocks[0].hash, "Block 2")
    )
    expect(result).toEqual(false);
  })

  test('Should has correct prevHash in secund block', () => {
    const blockchain = new Blockchain();
    const block1 = new Block(1, blockchain.blocks[0].hash, "data");
    const block2 = new Block(2, block1.hash, "data");
    
    blockchain.addBlock(block1);
    blockchain.addBlock(block2);
    
    expect(block2.previousHash).toEqual(block1.hash);
  })
})