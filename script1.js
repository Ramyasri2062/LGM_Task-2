const getUsersButton = document.getElementById('get-users-btn');
const cardGrid = document.getElementById('card-grid');
const loader = document.getElementById('loader');

getUsersButton.addEventListener('click', () => {
  loader.style.display = 'block';
  cardGrid.innerHTML = '';

  fetch('https://reqres.in/api/users?page=1 ')
    .then(response => response.json())
    .then(data => {
      loader.style.display = 'none';
      data.data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2 class="user-name">${user.first_name} ${user.last_name}</h2>
          <p class="user-email">${user.email}</p>
        `;
        cardGrid.appendChild(card);
      });
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error('Error:', error);
    });
});
