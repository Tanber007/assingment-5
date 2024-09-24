document.getElementById('1st-donate-btn-2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = document.getElementById('1st-donate-input-2').value;
        const donateMoneyNumber = parseInt(donateMoney);
        console.log(donateMoney);

        if(donateMoney > 0){
            const balance = document.getElementById('my-balance').innerText;
            const balanceNumber = parseInt(balance);

            const newBalance = balanceNumber - donateMoneyNumber;
            document.getElementById('my-balance').innerText = newBalance;
            alert("Transition Successfull");
        }
        else{
            alert('Transition Fail')
        }
});

