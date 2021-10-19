const Employee = require('../lib/Employee');

describe("Employee", () => {
    // Test if Employee is created
    describe("Initialization", () => {
        it("should create an object with a name, id and email", () => {
            const employee = new Employee("Andres", "1", "andres.liu22@gmail.com");
            expect(employee.name).toEqual("Andres");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("andres.liu22@gmail.com");
        });
    });

    describe("Functions", () => {
        it("should return the name of the employee", () => {
            const employee = new Employee("Andres", "1", "andres.liu22@gmail.com");
            expect(employee.getName()).toEqual("Andres");
        });

        it("should return the id of the employee", () => {
            const employee = new Employee("Andres", "1", "andres.liu22@gmail.com");
            expect(employee.getId()).toEqual("1");
        });

        it("should return the email of the employee", () => {
            const employee = new Employee("Andres", "1", "andres.liu22@gmail.com");
            expect(employee.getEmail()).toEqual("andres.liu22@gmail.com");
        });

        it("should return the role of the employee", () => {
            const employee = new Employee("Andres", "1", "andres.liu22@gmail.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});