const Employee = require("./employee ");



class Engineer {
    constructor (name, id, email, github) 
    {
     super(name, id, email);
     this.github = github;
  }
 
 getGithub()
  {
 return this.github;
  }
 
  getRole()

  {
return "employee"
  }

 }
 
 module.exports =Engineer;