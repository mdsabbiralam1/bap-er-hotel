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


/* orginal
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
});

// withdraw some money

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotalAmountText = withdrawInput.value;
    const WithdrawAmount = parseFloat(withdrawTotalAmountText);

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const currentwithdrawTotalText = withdrawTotalAmount.innerText;
    const previousBalanceTotalw = parseFloat(currentwithdrawTotalText);

    // current withdraw Total
    withdrawTotalAmount.innerText = previousBalanceTotalw + WithdrawAmount;

    // current withdraw input clear
    withdrawInput.value = '';

    // balance Total - withdraw
    const withdrawBalanceTotal = document.getElementById('balance-total');
    const withdrawBalanceText = withdrawBalanceTotal.innerText;
    const withdrawBalance = parseFloat(withdrawBalanceText);

    withdrawBalanceTotal.innerText = withdrawBalance - WithdrawAmount;
})
orginal Close */


// Practise Part 
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositCurentInputText = depositInput.value;
    const depositAmount = parseFloat(depositCurentInputText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const currentDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount + currentDepositTotal;

    // clear deposit input text
    depositInput.value = '';

    // balance ubdate
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = depositAmount + balanceTotalAmount;

})

