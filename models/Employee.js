class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId()  {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

    setCard() {
        const card = 
        `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-text"><i class="fas fa-user"></i> Employee</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}?subject=Mail from Website" target="_blank">${this.email}</a></li>
                </ul>
            </div>
        </div>
        
        `

        return card;
    }
}

module.exports = Employee;