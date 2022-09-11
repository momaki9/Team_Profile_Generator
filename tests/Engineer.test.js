const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Faith", "48", "Faith@email.com", "Faith_93")

describe("engineer", () => {
    it('should return the engineer name, id, email, office number, and github account', () => {
        expect(engineer.name).toBe("Faith");
        expect(engineer.id).toBe("48");
        expect(engineer.email).toBe("Faith@email.com");
        expect(engineer.github).toBe("Faith_93");
    })

    //validates the functions declared in Engineer.js
    it('should return engineer GitHub if getName function is called', () => {
        expect(engineer.getGitHub()).toBe("Faith_93");
    })
    // tests the function getRole()
    it('should return role of "engineer" when getRole function is called', () => {
        expect(engineer.getRole()).toBe("Engineer");
    })

})