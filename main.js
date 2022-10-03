birthDateInput = document.querySelector("#birth-date");
luckyNumberInput = document.querySelector("#lucky-number");
checkButton = document.querySelector("#check");
output = document.querySelector("#output");

checkButton.addEventListener("click", function checkBirthdayLuck(){
    var sum = findBirthdaySum(birthDateInput.value);
    if((sum%Number(luckyNumberInput.value)) === 0){
        output.innerText = "Yayyy!! Your birthday is lucky.";
    }
    else{
        output.innerText = "Nahhh!! Your birthday is not lucky.";
    }
});

function findBirthdaySum(birthDateInput){
    var sum = 0;
    birthDateInput = birthDateInput.replaceAll("-","");

    // forEach works for Arrays in Javascript- thus to use it for String you will have to assign arrays prototype to strings
    // String.prototype.forEach = Array.prototype.forEach;
    // birthDateInput.forEach((item) => (sum += Number(item)));
    
    for(item of birthDateInput){
        sum += Number(item);
    }
    return sum;
}