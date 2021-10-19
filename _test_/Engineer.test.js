const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    // Test if Engineer is created
    describe("Initialization", () => {
        it("should create an object with a name, id and email", () => {
            const engineer = new Engineer("Andres", "1", "andres.liu22@gmail.com", "andresliu22");
            expect(engineer.name).toEqual("Andres");
            expect(engineer.id).toEqual("1");
            expect(engineer.email).toEqual("andres.liu22@gmail.com");
            expect(engineer.github).toEqual("andresliu22");
        });
    });

    describe("Functions", () => {
        it("should return the name of the engineer", () => {
            const engineer = new Engineer("Andres", "1", "andres.liu22@gmail.com", "andresliu22");
            expect(engineer.getName()).toEqual("Andres");
        });

        it("should return the id of the engineer", () => {
            const engineer = new Engineer("Andres", "1", "andres.liu22@gmail.com", "andresliu22");
            expect(engineer.getId()).toEqual("1");
        });

        it("should return the email of the engineer", () => {
            const engineer = new Engineer("Andres", "1", "andres.liu22@gmail.com", "andresliu22");
            expect(engineer.getEmail()).toEqual("andres.liu22@gmail.com");
        });

        it("should return the github of the engineer", () => {
            const engineer = new Engineer("Andres", "1", "andres.liu22@gmail.com", "andresliu22");
            expect(engineer.getGithub()).toEqual("https://github.com/andresliu22");
        });

        it("should return the role of the engineer", () => {
            const engineer = new Engineer("Andres", "1", "andres.liu22@gmail.com", "andresliu22");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});