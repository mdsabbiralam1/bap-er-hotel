body {
    background - color: lightblue;
}

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    console.log(newDepositText)
});