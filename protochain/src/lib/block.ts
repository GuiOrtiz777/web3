import sha256 from "crypto-js/sha256";
import Validation from "./validation";

/**
 * Class Block
 */
export default class Block {
  index: number;
  timestamp: number;
  hash: string;
  previousHash: string;
  data: string;
  // nonce: number;

  /**
   * Creates a new Block
   * @param index The block index in blockcian
   * @param previousHash The block previousHash in blockcian
   * @param data The block data in blockcian 
   */
  constructor(index: number, previousHash: string, data: string) {
    this.index = index;
    this.timestamp = Date.now();
    this.previousHash = previousHash;
    this.data = data;
    this.hash = this.getHash();
    // this.nonce = nonce;
  }

  /**
   * Generator sha256 of the data block
   * @returns Returns a hash with a concatenation of the block data
   */
  getHash(): string {
    return sha256(
      this.index +
      this.data +
      this.timestamp +
      this.previousHash
    ).toString();
  }
  
  /**
   * Validates the block
   * @returns Returns true if the block is valid
   */
  isValid(previousHash: string, previousIndex: number): Validation {
    if (previousIndex !== this.index -1) return new Validation(false, "Invalid index");
    if (this.hash !== this.getHash()) return new Validation(false, "Invalid hash");
    if (!this.data) return new Validation(false, "Invalid data");
    if (this.timestamp < 1) return new Validation(false, "Invalid timestamp");
    if (this.previousHash !== previousHash) return new Validation(false, "Invalid previous hash");
    return new Validation();
  }
}