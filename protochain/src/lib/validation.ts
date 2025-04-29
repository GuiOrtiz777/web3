/**
 * Validation class
 */
export default class Validation {
  sucess: boolean;
  message: string;

  /**
   * Creates a new validation object
   * @param sucess If the validation was successful
   * @param message The validation message, if validation falid
   */
  constructor(sucess: boolean = true, message: string = "") {
    this.sucess = sucess;
    this.message = message;
  }
}
