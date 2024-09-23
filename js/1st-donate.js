document.getElementById('1st-donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = document.getElementById('1st-donate-input').value;
        console.log(donateMoney);
        });