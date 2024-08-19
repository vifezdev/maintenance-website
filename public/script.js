document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/home';
        } else {
            const invalidPasswordDiv = document.getElementById('invalid-password');
            invalidPasswordDiv.classList.remove('hidden');
            setTimeout(() => {
                invalidPasswordDiv.classList.add('hidden');
            }, 3000);
        }
    });
});