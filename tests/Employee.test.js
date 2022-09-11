const Employee = require("../lib/Employee");


describe("employee", () => {

    const employee = new Employee("Joe", "205", "Joe@email.com")
    // tests if creating an instance of employee retains the properties of the parent object Employee
    it('should return the emplyee name, id and email', () => {
        expect(employee.name).toBe("Joe");
        expect(employee.id).toBe("205");
        expect(employee.email).toBe("Joe@email.com");
    })
    //validates the functions declared in Employee.js
    it('should return emplyee name if getName is called', () => {
        expect(employee.getName()).toBe("Joe");
    })
    // tests the function getId()
    it('should return emplyee id if getId is called', () => {
        expect(employee.getId()).toBe("205");
    })
    // tests the function getEmail()
    it('should return emplyee email if getEmail is called', () => {
        expect(employee.getEmail()).toBe("Joe@email.com");
    })
    // tests the function getRole()
    it('should return role of "employee" when function is called', () => {
        expect(employee.getRole()).toBe("Employee");
    })


})