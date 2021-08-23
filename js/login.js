document.getElementById('login-btn').addEventListener('click', function () {
    // get user email 
    const emailfield = document.getElementById('user-email');
    const userEmail = emailfield.value;
    // get user passwod
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // cheak email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('invalid user')
    }
})
