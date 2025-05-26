const fullName = (first, last) => `${first} ${last}`;

document.querySelector('#fullname').innerHTML = fullName(firstName, lastName);