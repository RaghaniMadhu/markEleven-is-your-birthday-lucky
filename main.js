birthDateInput = document.querySelector("#birth-date");
luckyNumberInput = document.querySelector("#lucky-number");
checkButton = document.querySelector("#check");
output = document.querySelector("#output");

checkButton.addEventListener("click", function checkBirthdayLuck(){
    if(validateInput(birthDateInput.value, luckyNumberInput.value)){
        var sum = findBirthdaySum(birthDateInput.value);
        if((sum%Number(luckyNumberInput.value)) === 0){
            showMessageOutput("Yayyy!! Your birthday is lucky.");
        }
        else{
            showMessageOutput("Nahhh!! Your birthday is not lucky.");
        }
    }
    
});

function validateInput(birthDate, luckyNumber){
    if(birthDate.length == 0 || luckyNumber.length == 0){
        showMessageOutput("Please enter Birth Date and Lucky Number");
        return false;
    }
    if(luckyNumber < 1){
        showMessageOutput("Please enter a valid lucky number.");
        return false;
    }else if(luckyNumber === "1"){
        showMessageOutput("1 is lucky number for any given birthdate. Please enter valid input");
        return false;
    }else{
        // checking to not allow future date
        var dateToday = new Date();

        var month = dateToday.getMonth() + 1;
        var day = dateToday.getDate();
        var year = dateToday.getFullYear();

        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        var maxDate = year + '-' + month + '-' + day;

        birthDateObject = new Date(birthDate);
        todaysDateObject = new Date(maxDate);

        if(birthDateObject > todaysDateObject){
            showMessageOutput("You are yet to be born");
            return false;
        }
    }
    return true;
}

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

function showMessageOutput(message){
    output.innerText = message;   
}

