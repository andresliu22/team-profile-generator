const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Test if Intern is created
    describe("Initialization", () => {
        it("should create an object with a name, id and email", () => {
            const intern = new Intern("Andres", "1", "andres.liu22@gmail.com", "UC Berkeley Bootcamp");
            expect(intern.name).toEqual("Andres");
            expect(intern.id).toEqual("1");
            expect(intern.email).toEqual("andres.liu22@gmail.com");
            expect(intern.school).toEqual("UC Berkeley Bootcamp");
        });
    });

    describe("Functions", () => {
        it("should return the name of the intern", () => {
            const intern = new Intern("Andres", "1", "andres.liu22@gmail.com", "UC Berkeley Bootcamp");
            expect(intern.getName()).toEqual("Andres");
        });

        it("should return the id of the intern", () => {
            const intern = new Intern("Andres", "1", "andres.liu22@gmail.com", "UC Berkeley Bootcamp");
            expect(intern.getId()).toEqual("1");
        });

        it("should return the email of the intern", () => {
            const intern = new Intern("Andres", "1", "andres.liu22@gmail.com", "UC Berkeley Bootcamp");
            expect(intern.getEmail()).toEqual("andres.liu22@gmail.com");
        });

        it("should return the school of the intern", () => {
            const intern = new Intern("Andres", "1", "andres.liu22@gmail.com", "UC Berkeley Bootcamp");
            expect(intern.getSchool()).toEqual("UC Berkeley Bootcamp");
        });

        it("should return the role of the intern", () => {
            const intern = new Intern("Andres", "1", "andres.liu22@gmail.com", "UC Berkeley Bootcamp");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});