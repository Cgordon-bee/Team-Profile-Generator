const Engineer = require("../lib/Engineer");

test('should create a new instance of Engineer', () => {
    const newCopy = new Engineer()
    expect(typeof (newCopy)).toBe("object")
    
})

test('should set attributes by a constructor', () => {
    const newCopy = new Engineer("Chestnut", 1, "chestnut@pen.com","github")
    expect(newCopy.name).toBe("Chestnut")
    expect(newCopy.id).toBe(1)
    expect(newCopy.email).toBe("chestnut@pen.com")
    expect(newCopy.github).toBe("github")
})

test('should return role', () => {
    expect(newCopy.getRole()).toBe(Engineer)
    
})


    