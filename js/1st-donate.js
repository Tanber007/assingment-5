document.getElementById('1st-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = document.getElementById('1st-donate-input').value;
        const donateMoneyNumber = parseInt(donateMoney);
        console.log(donateMoney);

        // Adding the money
        if(donateMoney > 0 ){
            const balance = document.getElementById('donate-balance').innerText;
            const balanceNumber = parseInt(balance);

            const newBalance = balanceNumber + donateMoneyNumber;
            document.getElementById('donate-balance').innerText = newBalance;
            alert("Transition Successfull");


            // const myCost = document.getElementById('my-balance').innerText;
            // const newMyCost = parseInt(myCost);

            // const remainingBalance = newMyCost - balanceNumber;
            // document.getElementById('my-balance').innerText = remainingBalance;
        }
        else{
            alert('Transition Fail');
        }

        });