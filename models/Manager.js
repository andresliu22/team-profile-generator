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
        super();
        const liOffice = document.createElement('li');
        liOffice.classList.add('list-group-item');
        liOffice.textContent("Office Number: " + this.officeNumber);
        liOffice.appendChild(cardList);

        // <div class="card" style="width: 18rem;">
        //             <div class="card-header">
        //               <h5 class="card-title">Michael</h5>
        //               <h6 class="card-text"><i class="fas fa-user-graduate"></i> Intern</h6>
        //             </div>
        //             <div class="card-body">
        //               <ul class="list-group">
        //                 <li class="list-group-item">ID: 3</li>
        //                 <li class="list-group-item">Email: <a href="mailto:michael@gmail.com?subject=Mail from Website" target="_blank">Michael@gmail.com</a></li>
        //                 <li class="list-group-item">School: W3Schools</li>
        //               </ul>
        //             </div>
        //         </div>
    }
 }

module.exports = Manager;
