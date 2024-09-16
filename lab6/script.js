document.getElementById('getUser').addEventListener('click', () => {
    const apiURL = 'https://randomuser.me/api/?results=4';

    fetchUserData(apiURL)
        .then(users => renderUsers(users))
        .catch(error => showError(error));
});

function fetchUserData(apiURL) {
    return fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.results)
        .catch(error => {
            throw new Error(`Error fetching data: ${error.message}`);
        });
}

function renderUsers(users) {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = '';

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');

        userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture" width="80" height="80">
            <div>
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Number:</strong> ${user.cell}</p>
                <p><strong>City:</strong> ${user.location.city}</p>
                <p><strong>Postcode:</strong> ${user.location.postcode}</p>
            </div>
        `;

        usersContainer.appendChild(userDiv);
    });
}

function showError(error) {
    console.error('Error:', error.message);
}
