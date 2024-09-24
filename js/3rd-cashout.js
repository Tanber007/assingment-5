document.getElementById('1st-donate-btn-3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = document.getElementById('1st-donate-input-3').value;
        const donateMoneyNumber = parseInt(donateMoney);
        console.log(donateMoney);

        if(donateMoney > 0){
            const balance = document.getElementById('my-balance').innerText;
            const balanceNumber = parseInt(balance);

            const newBalance = balanceNumber - donateMoneyNumber;
            document.getElementById('my-balance').innerText = newBalance;
           
        }
        else{
            alert('Transition Fail')
        }
});