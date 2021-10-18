const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    setCard() {
        const card = 
        `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-text"><i class="fas fa-glasses"></i> Engineer</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}?subject=Mail from Website" target="_blank">${this.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
                </ul>
            </div>
        </div>
        `

        return card;
    }
}

module.exports = Engineer;
