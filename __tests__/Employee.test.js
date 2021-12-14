 const Employee = require("../lib/Employee")
// should create new instance of employee
 test('should create new employee instance', () => {
   const newCopy = new Employee()
    expect(typeof (newCopy)).toBe("object")

 })
 test('should set attributes by a constructor', () => {
     const newCopy = new Employee("Rudy", 1, "rudy@pen.com")
     expect(newCopy.name).toBe("Rudy")
     expect(newCopy.id).toBe(1)
     expect(newCopy.email).toBe("rudy@pen.com")
 })
test('should return role', () => {
    const newCopy = new Employee("Rudy", 1, "rudy@pen.com")
    expect(newCopy.getRole()).toBe("Employee")
    
})


 