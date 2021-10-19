const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    setCard() {
        const card = 
        `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-text"><i class="fas fa-user-graduate"></i> Intern</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}?subject=Mail from Website" target="_blank">${this.email}</a></li>
                <li class="list-group-item">School: ${this.school}</li>
                </ul>
            </div>
        </div>
        `

        return card;
    }
}

module.exports = Intern;
