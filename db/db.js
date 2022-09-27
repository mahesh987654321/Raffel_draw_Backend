const Ticket = require("../models/Tickets");

class myDb {
  constructor() {
    this.tickets = [];
  }
  /**
   * create and set new ticket
   * @param {string} userName
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(userName, price) {
    const ticket = new Ticket(userName, price);
    this.tickets.push(ticket);
    return ticket;
  }
  /**
   * This is a object for choosing tickets as you needed
   * @param {string} userName
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(userName, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(userName, price);
      result.push(ticket);
    }
    return result;
  }
  /**
   * Return all available tickets
   */
  find() {
    return this.tickets;
  }
  /**
   *
   * @param {string} ticketId
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket = ticket.id === ticketId)
    );
    return ticket;
  }
  /**
   *This will return find by user name
   * @param {string} userName
   * @returns {Array<Ticket>}
   */
  findByUserName(userName) {
    const ticket = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.userName == userName
    );
    return tickets;
  }
  /**
   *
   * @param {string} userId
   * @param {{userName:string, price:number}} userBody
   * @returns {Ticket}
   */
  updatedById(userId, userBody) {
    const ticket = this.findById(userId);
    ticket.userName = userBody.userName ?? ticket.userName;
    ticket.price = userBody.price ?? ticket.price;
    ticket.updatedAt = new Date();
    return ticket;
  }
  /**
   *
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex(
      /**
       *@param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let indexes = new Array(winnerCount);
    let count = 0;
    while (count < winnerCount) {
      let indexCount = Math.floor(Math.random() * this.tickets.length);
      if (!indexes.includes(indexCount)) {
        indexes[count++] = indexCount;
        continue;
      }
    }
    // for (let i = 0; i < indexes.length; i++) {
    //   let index = Math.floor(Math.random() * this.tickets.length);
    //   indexes[i] = index;
    // }
    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}
myDb = new myDb();

module.exports = myDb;
