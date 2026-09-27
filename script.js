const loginForm = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.textContent = isHidden ? '🙈' : '👁';
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  errorMessage.textContent = '';

  const username = document.getElementById('username').value.trim();
  const password = passwordInput.value.trim();
  const remember = document.getElementById('remember').checked;

  if (!username || !password) {
    errorMessage.textContent = 'Preencha usuário e senha.';
    return;
  }

  if (remember) {
    localStorage.setItem('rememberedUsername', username);
  } else {
    localStorage.removeItem('rememberedUsername');
  }

  console.log('Login enviado:', { username, remember });
});

window.addEventListener('DOMContentLoaded', () => {
  const remembered = localStorage.getItem('rememberedUsername');
  if (remembered) {
    document.getElementById('username').value = remembered;
    document.getElementById('remember').checked = true;
  }
});
