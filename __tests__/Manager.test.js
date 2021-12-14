const Manager = require("../lib/Manager")

test('should create new instance of Manager', () => {
    const newCopy = new Manager()
    expect(typeof (newCopy)).toBe("object")

})
test('should set attributes by a constructor ', () => {
    const newCopy = new Manager("Karen", 1, "Karen@books.com", "officeNumber")
    expect(newCopy.name).toBe("Karen")
    expect(newCopy.id).toBe(1)
    expect(newCopy.email).toBe("Karen@books.com")
    expect(newCopy.officeNumber).toBe('121-897-1244')
})

test('should return role', () => {
    const newCopy = new Manager("Karen",1, "Karen@books.com", "officerNumber")
    expect(newCopy.getRole()).toBe("Manager")
})
