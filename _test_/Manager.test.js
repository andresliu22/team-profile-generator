const Manager = require('../lib/Manager');

describe("Manager", () => {
    // Test if Manager is created
    describe("Initialization", () => {
        it("should create an object with a name, id and email", () => {
            const manager = new Manager("Andres", "1", "andres.liu22@gmail.com", "100");
            expect(manager.name).toEqual("Andres");
            expect(manager.id).toEqual("1");
            expect(manager.email).toEqual("andres.liu22@gmail.com");
            expect(manager.officeNumber).toEqual("100");

        });
    });

    describe("Functions", () => {
        it("should return the name of the manager", () => {
            const manager = new Manager("Andres", "1", "andres.liu22@gmail.com", "100");
            expect(manager.getName()).toEqual("Andres");
        });

        it("should return the id of the manager", () => {
            const manager = new Manager("Andres", "1", "andres.liu22@gmail.com", "100");
            expect(manager.getId()).toEqual("1");
        });

        it("should return the email of the manager", () => {
            const manager = new Manager("Andres", "1", "andres.liu22@gmail.com", "100");
            expect(manager.getEmail()).toEqual("andres.liu22@gmail.com");
        });

        it("should return the office number of the manager", () => {
            const manager = new Manager("Andres", "1", "andres.liu22@gmail.com", "100");
            expect(manager.getOfficeNumber()).toEqual("100");
        });

        it("should return the role of the manager", () => {
            const manager = new Manager("Andres", "1", "andres.liu22@gmail.com", "100");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});