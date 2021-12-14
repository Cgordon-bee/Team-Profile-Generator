const Employee = require("../lib/Employee")

class Manager extends Employee{
   constructor (name, id, email, officeNumber) 
   {
    super(name, id, email);
    this.officeNumber = officeNumber;
 }

getOfficerNumber()
 {
return this.officeNumber;
}

getRole()
{
return "Manager";

}
}

module.exports = Manager;