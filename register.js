const registerForm = document.getElementById('registerForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('errorMessage');
const backToLogin = document.getElementById('backToLogin');

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password';
  passwordInput.type = isHidden ? 'text' : 'password';
  togglePassword.textContent = isHidden ? '🙈' : '👁';
});

backToLogin.addEventListener('click', () => {
  window.location.href = 'index.html';
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  errorMessage.style.color = '';
  errorMessage.textContent = '';

  const username = document.getElementById('username').value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (!username || !password || !confirmPassword) {
    errorMessage.textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'As senhas não coincidem.';
    return;
  }

  console.log('Cadastro enviado:', { username });
});
