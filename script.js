//Logic for computing money amount and displaying the result
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100;
    var year = new Date().getFullYear() + parseInt(years);
    
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>, <br> in the year <mark>" + year + "</mark>";

}
        
//Logic for updating the rate display upon change of rate
function updateRate()
{

    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate + "%";

}

//Logic for checking if the principal value entered is zero or if it is negative
function checkData()
{
    var principalValue = document.getElementById("principal");

    if (principalValue.value <= 0){
        alert("Enter a positive number");
        principalValue.focus();
    }

}