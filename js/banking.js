// handle deposit button event

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newdepositText = depositInput.value;
    const newdepositAmoumt = parseFloat(newdepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousdepositText = depositTotal.innerText;
    const previousdepositAmount = parseFloat(previousdepositText);
    const newdepositTotal = previousdepositAmount + newdepositAmoumt;
    depositTotal.innerText = newdepositTotal;

    // update account balance




    // Clear the deposit input field 
    depositInput.value = ('')

});
