const usernameDisplay = document.getElementById('usernameDisplay');
const logoutButton = document.getElementById('logoutButton');

window.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('currentUsername');
  if (!username) {
    window.location.href = 'index.html';
    return;
  }
  usernameDisplay.textContent = username;
});

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('currentUsername');
  window.location.href = 'index.html';
});
