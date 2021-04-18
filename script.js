function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "If you deposit  " + principal + ",<br/>" +
        "at an interest rate of  " + rate + ",<br/>" +
        "You will receive an amount of  " + interest + ",<br/> " +
        "in the year  " + yearInTheFuture + " ";

}

function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var checkPrincipal = parseInt(principal) > 0;
    if (!checkPrincipal) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}