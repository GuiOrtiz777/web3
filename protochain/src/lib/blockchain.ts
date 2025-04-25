import Block from './block';

export default class Blockchain {
  blocks: Block[];

  constructor() {
    this.blocks = [new Block(0, "genesis", 1, "")];
  }

  /**
   * Add a new block in Blockchain
   * @param block The block in blockchain
   */
  addBlock(block: Block): void {
    this.blocks.push(block);
  }
}
