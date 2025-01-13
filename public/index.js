
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
   
    if (username === 'animal' && password === '1234') {
      errorMessage.classList.add('hidden');
      alert('Bienvenido al sistema de animales');
    } else {
      errorMessage.classList.remove('hidden');
    }
  });
  