import {describe, test, expect} from '@jest/globals';
import Blockchain from '../src/lib/blockchain';
import Block from '../src/lib/block';

describe("Blockchain tests", () => {

  test('Should has genesis blocks', () => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  })

  test('Should has correct prevHash in secund block', () => {
    const blockchain = new Blockchain();
    const block1 = new Block(1, "genesis", 54, blockchain.blocks[0].hash);
    const block2 = new Block(2, "first", 55, block1.hash);
    
    blockchain.addBlock(block1);
    blockchain.addBlock(block2);
    
    expect(block2.prevHash).toEqual(block1.hash);
  })
})