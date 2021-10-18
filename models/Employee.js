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
        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const cardText = document.createElement('h5');
        const icon = document.createElement('i');

        card.classList.add('card');
        cardHeader.classList.add('card-header');
        cardTitle.classList.add('card-title');
        cardText.classList.add('card-text');
        icon.classList.add('fas, fa-user');

        cardTitle.textContent(this.name);
        cardText.textContent("Employee");

        const cardBody = document.createElement('div');
        const cardList = document.createElement('ul');
        const liID = document.createElement('li');
        const liEmail = document.createElement('li');
        const aEmail = document.createElement('a');

        cardBody.classList.add('card-body');
        cardList.classList.add('list-group');
        liID.classList.add('list-group-item');
        liEmail.classList.add('list-group-item');

        liID.textContent("ID: " + this.id);
        liEmail.textContent("Email: ");
        aEmail.setAttribute('href', `mailto:${this.email}?subject=Mail from Website`)
        aEmail.setAttribute('target', '_blank');
        aEmail.textContent(this.email);

        const cardContainer = document.getElementById('card-container');

        card.appendChild(cardHeader);
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardText);
        card.appendChild(cardBody);
        cardBody.appendChild(cardList);
        cardList.appendChild(liID);
        cardList.appendChild(liEmail);
        liEmail.appendChild(aEmail);

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

module.exports = Employee;