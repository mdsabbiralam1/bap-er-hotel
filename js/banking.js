// handle deposit button event

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newdepositText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousdepositText = depositTotal.innerText;
    const previousdepositAmount = parseFloat(previousdepositText);
    const newdepositTotal = previousdepositAmount + newdepositAmount;
    depositTotal.innerText = newdepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotaltext);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // Clear the deposit input field 
    depositInput.value = ('')

});
