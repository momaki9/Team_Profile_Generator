const Manager = require("../lib/Manager");
const manager = new Manager("Sara", "71", "Sara@email.com", "10A")

describe("manager", () => {
    it('should return the manager name, id, email, and office number', () => {
        expect(manager.name).toBe("Sara");
        expect(manager.id).toBe("71");
        expect(manager.email).toBe("Sara@email.com");
        expect(manager.officeNumber).toBe("10A");
    })
    
    //validates the functions declared in Manager.js
    it('should return office number when function is called', () => {
        expect(manager.getOfficeNumber()).toBe("10A");
    })
    // tests the function getRole()
    it('should return role of manager when function is called', () => {
        expect(manager.getRole()).toBe("Manager");
    })

})