const shortid = require("shortid");

class Ticket {
  /**
   *constructor functionality
   * @param {string} userName
   * @param {number} price
   */
  constructor(userName, price) {
    this.id = shortid.generate();
    this.userName = userName;
    this.price = price;
    this.createAt = new Date();
    this.updatedDate = new Date();
  }
}
module.exports = Ticket;
