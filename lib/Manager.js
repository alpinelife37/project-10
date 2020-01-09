class Manager {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    this.id = id;
    this.email = email;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
