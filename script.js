let tickets = [];

function buyTicket() {
    const selectedMovie = document.getElementById('movie').value;
    const quantity = document.getElementById('quantity').value;
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    let errorMessages = '';

    if (selectedMovie.trim() === '') {
        errorMessages += 'Velg en film.\n'
    }

    if (quantity.trim() === '') {
        errorMessages += 'Oppgi antall billetter.\n';
    }

    if (phone.trim() === '') {
        errorMessages += 'Oppgi telefonnummer.\n';
    } else if (!validatePhone(phone)) {
        errorMessages += 'Telefonnummeret er ikke gyldig. Det skal bestå av 8 siffer.\n';
    }

    if (email.trim() === '') {
        errorMessages += 'Oppgi e-postadresse.\n';
    } else if (!validateEmail(email)) {
        errorMessages += 'E-postadressen er ikke gyldig.\n';
    }

    if (errorMessages !== '') {
        alert('Feil:\n' + errorMessages);
        return;
    }

    if (selectedMovie.trim() === '' || quantity.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '' || email.trim() === '') {
        alert('Vennligst fyll ut alle feltene.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Vennligst oppgi en gyldig e-postadresse.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Vennligst oppgi et gyldig telefonnummer.');
        return;
    }

    const ticket = {
        movie: selectedMovie,
        quantity: quantity,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };

    tickets.push(ticket);

    displayTickets();

    document.getElementById('movie').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
}

function deleteAllTickets() {
    tickets = [];
    displayTickets();
}

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML ='';

    tickets.forEach((ticket)=> {
        const listItem = document.createElement('li');
        listItem.textContent = `Film: ${ticket.movie}, Antall: ${ticket.quantity}, Fornavn: ${ticket.firstName}, Etternavn: ${ticket.lastName}, E-post: ${ticket.email}, Telefonnr: ${ticket.phone}`;
        ticketList.appendChild(listItem);
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(phone);
}
