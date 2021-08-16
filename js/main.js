//creat a function on deposit
function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const inputAmountText = parseFloat(InputField.value);
    console.log(inputAmountText);
    //empty the input field
    InputField.value = '';
    return inputAmountText;

}

function updateTotalField(totalFieldId,PreviousAmount){
    const TotalField = document.getElementById(totalFieldId);
    const TotalText = parseFloat(TotalField.innerText);
    console.log(TotalText);
    const NewDiTotal = PreviousAmount + TotalText;
    TotalField.innerText = NewDiTotal;

}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    console.log(balanceTotalText);
    return balanceTotalText;
}


function updateBalance(PreviousdipositAmount, isAdd){
     const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // console.log(balanceTotalText);
    const balanceTotalText = getCurrentBalance();

    const PreviousBalanceTotal = parseFloat(balanceTotalText);
    
    if(isAdd == true){
        const NewBalanceTotal = PreviousBalanceTotal + PreviousdipositAmount;
        balanceTotal.innerText = NewBalanceTotal;

    }else{
        const NewBalanceTotal = PreviousBalanceTotal - PreviousdipositAmount;
        balanceTotal.innerText = NewBalanceTotal;

    }
}


document.getElementById('deposit-button').addEventListener('click', function() {
    // const dipositInput = document.getElementById('deposit-input');
    // const PreviousdipositAmount = parseFloat(dipositInput.value);
    // console.log(PreviousdipositAmount);
    const PreviousdipositAmount = getInputValue('deposit-input');

    if(PreviousdipositAmount > 0){
        updateTotalField('diposit-total', PreviousdipositAmount);
        updateBalance(PreviousdipositAmount, true);
    }else{
        console.log('your input is not valid');
    }

    //get current deposit
    // const dipositTotal = document.getElementById('diposit-total');
    // const dipositTotalText = parseFloat(dipositTotal.innerText);
    // console.log(dipositTotalText);

    // //dipositTotal.innerText = PreviousdipositAmount;
    // //add the total amount of deposit
    // const NewDipositTotal = PreviousdipositAmount + dipositTotalText;
    // dipositTotal.innerText = NewDipositTotal;

    //updateTotalField('diposit-total', PreviousdipositAmount);

    //update total balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // console.log(balanceTotalText);

    // const PreviousBalanceTotal = parseFloat(balanceTotalText);

    // const NewBalanceTotal = PreviousBalanceTotal + PreviousdipositAmount;
    // console.log(NewBalanceTotal);
    // balanceTotal.innerText = NewBalanceTotal;
    //updateBalance(PreviousdipositAmount, true);

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrowInput = document.getElementById('Withdraw-input');
    // const NewWithdrowInput = parseFloat(withdrowInput.value);
    // console.log(NewWithdrowInput);
    const NewWithdrowInput = getInputValue('Withdraw-input');
    const currentBalance = getCurrentBalance();

    if(NewWithdrowInput >0 && NewWithdrowInput < currentBalance){
        updateTotalField('withdraw-total', NewWithdrowInput);
        updateBalance(NewWithdrowInput, false);    
    }else{
        console.log('You can not give the valid input');
    }

    // const WithdrowTotal = document.getElementById('withdraw-total');
    // console.log(WithdrowTotal.innerText);

    //updateTotalField('withdraw-total', NewWithdrowInput);

    // const PreviousWithdrawAmount = WithdrowTotal.innerText;
    // const NewWithdrawAmount = parseFloat(PreviousWithdrawAmount) + NewWithdrowInput;

    // WithdrowTotal.innerText = NewWithdrawAmount;

    //update the Total balance
    // const withdrawtotalBalance = document.getElementById('balance-total');
    // const withdrawtotalBalanceText = withdrawtotalBalance.innerText;
    // console.log(withdrawtotalBalanceText);

    // const withdrawPreviousBalanceTotal = parseFloat(withdrawtotalBalanceText);
    // const withdrawNewBalanceTotal = withdrawPreviousBalanceTotal - NewWithdrowInput;
    // withdrawtotalBalance.innerText = withdrawNewBalanceTotal;
    //updateBalance(NewWithdrowInput, false);       

})