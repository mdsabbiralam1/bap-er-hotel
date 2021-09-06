/*
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    // get current balance
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    console.log(depositTotalText);
}); */

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;


    // get current balance
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    console.log(depositTotalText);

    // clear deposit input field
    depositInput.value = '';
})