document.getElementById('1st-donate-btn-2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = document.getElementById('1st-donate-input-2').value;
        const donateMoneyNumber = parseInt(donateMoney);
        console.log(donateMoney);

        const modal = document.getElementById('my_modal_6');

        // 2nd Adding the money
        if(!isNaN(donateMoneyNumber) && donateMoneyNumber > 0){
            const balance = document.getElementById('donate-balance-2').innerText;
            const balanceNumber = parseInt(balance);

            const newBalance = balanceNumber + donateMoneyNumber;
            document.getElementById('donate-balance').innerText = newBalance;
            modal.showModal();
        }
        else{
            alert('Transition Fail');
        }
});

        document.addEventListener('keydown', function(event) {
            const modal = document.getElementById('my_modal_6');
            if (event.key === "Escape" && modal.open) {
                modal.close();
            }
        });