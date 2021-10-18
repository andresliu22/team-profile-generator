const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    setCard() {
        const card = 
        `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-text"><i class="fas fa-mug-hot"></i> Manager</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}?subject=Mail from Website" target="_blank">${this.email}</a></li>
                <li class="list-group-item">Office Number: ${this.officeNumber}</li>
                </ul>
            </div>
        </div>
        `

        return card;
    }
 }

module.exports = Manager;
