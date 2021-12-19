const Intern = require("../lib/Intern");


test('should create a new instance of Intern', () => {
    const newCopy = new Intern()
    expect(typeof (newCopy)).toBe("object")
})


test('should set attributes by an instructor', () => {
    const newCopy = new Intern("Chloe", 1, "chloe@home.com","Highgrade School")
    expect(newCopy.name).toBe("Chloe")
    expect(newCopy.id).toBe(1)
    expect(newCopy.email).toBe("chloe@home.com")
    expect(newCopy.school).toBe("Highgrade School")
})

test('should return role', () => {
    const newCopy = new Intern("Chloe",1, "chloe@home.com", "Highgrade School")
    expect(newCopy.getRole()).toBe("Intern")

})