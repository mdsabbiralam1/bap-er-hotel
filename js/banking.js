// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmoumt = depositInput.value;
    // console.log(depositAmoumt);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmoumt;

    // Clear the deposit input field 
    depositInput.value = ('')

});
