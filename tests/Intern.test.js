const Intern = require("../lib/Intern");
const intern = new Intern("Trent", "66", "TrentAA@email.com", "CSUF")

describe("intern", () => {
    it('should return the intern name, id, email, and school', () => {
        expect(intern.name).toBe("Trent");
        expect(intern.id).toBe("66");
        expect(intern.email).toBe("TrentAA@email.com");
        expect(intern.school).toBe("CSUF");
    })
    //validates the getSchool function declared in Intern.js
    it('should return intern school if getSchool is called', () => {
        expect(intern.getSchool()).toBe("CSUF");
    })
    // tests the function getRole()
    it('should return role of "intern" when function is called', () => {
        expect(intern.getRole()).toBe("Intern");
    })

})