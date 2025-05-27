// .checked = property that determines the checked state of an 
//            HTML checkbox or radio button element


const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const rupayBtn = document.getElementById('rupayBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const payResult = document.getElementById('payResult');


mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = 'You are Subscribed';
    }
    else{
        subResult.textContent = 'Please Subscribe!';
    }


    if(visaBtn.checked){
        payResult.textContent = 'You are paying with Visa';
    }
    else if(masterBtn.checked){
        payResult.textContent = 'You are paying with MasterCard';
    }
    else if(rupayBtn.checked){
        payResult.textContent = 'You are paying with Rupay';
    }
    else{
        payResult.textContent = 'You must select a payment type';
    }

}

