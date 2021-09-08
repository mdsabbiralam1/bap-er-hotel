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

    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);


    // get current balance
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousTotalAmount = parseFloat(depositTotalText);

    depositTotal.innerText = previousTotalAmount + depositAmount;

    // ubdate balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // clear deposit input field
    depositInput.value = '';
})