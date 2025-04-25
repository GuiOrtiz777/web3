/**
 * Class Block
 */
export default class Block {
  index: number;
  hash: string;
  nonce: number;
  prevHash: string;

  /**
   * Creates a new Block
   * @param index The block index in blockcian
   * @param hash The block hash in blockcian 
   * @param nonce The block nonce in blockcian
   * @param prevHash The block prevHash in blockcian
   */
  constructor(index: number, hash: string, nonce: number, prevHash: string) {
    this.index = index;
    this.hash = hash;
    this.nonce = nonce;
    this.prevHash = prevHash;
  }

  /**
   * Validates the block
   * @returns Returns true if the block is valid
   */
  isValid(): boolean {
    if(this.index < 0) return false;
    if (!this.hash) return false;
    if (this.nonce < 0) return false;
    if (!this.prevHash) return false;
    return true;
  }
}