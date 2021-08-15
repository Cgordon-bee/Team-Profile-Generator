const inquirer = require("./employee");



class Manager {
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

module.exports =Manager;