//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){

    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

// update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;//ager taka ase 
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;//new takar sathe add
    depositTotal.innerText = newDepositTotal;

//update account balance
    const balanceTotal = document.getElementById('balance-total');//class ta anlam
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

//new total balance now
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite input value field
    depositInput.value = "";
});

//handle withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithDrawAmount = parseFloat(withdrawAmountText);
    
    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update total balance now from withdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    //calculation
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input field
    withdrawInput.value = "";
});