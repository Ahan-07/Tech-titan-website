//form validation join us 
document.addEventListener('DOMContentLoaded', function() {
    const joinForm = document.querySelector('form');

    joinForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from reloading page

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Send the form data as JSON
        })
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text || 'Something went wrong'); // Throw error with response text
                });
            }
            return response.json(); // Parse response as JSON if OK
        })
        .then(data => {
            console.log('Success:', data);
            alert('Registration successful!');
            // Redirect user, display success message, etc.
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to register: ' + error.message); // Display error message to the user
        });
    });
});

//dynamic event loading page
document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');

    fetch('/api/events')
        .then(response => response.json())
        .then(data => {
            let eventsHtml = '';

            data.forEach(event => {
                eventsHtml += `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${event.title}</h5>
                                <p class="card-text">${event.description}</p>
                                <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
                                <p><strong>Location:</strong> ${event.location}</p>
                            </div>
                        </div>
                    </div>`;
            });

            eventsContainer.innerHTML = eventsHtml;
        })
        .catch(error => console.error('Error fetching events:', error));
});
//dynamic coding challenge
document.addEventListener('DOMContentLoaded', function() {
    const challengeDropdown = document.getElementById('challenge');
    const challengeContainer = document.getElementById('challenge-container');

    challengeDropdown.addEventListener('change', function() {
        const difficulty = challengeDropdown.value;

        fetch(`/api/challenge/${difficulty}`)
            .then(response => response.json())
            .then(data => {
                challengeContainer.innerHTML = `
                    <h5>Question:</h5>
                    <p>${data.question}</p>
                `;
            })
            .catch(error => console.error('Error fetching challenge:', error));
    });
});
//scroll to section effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
