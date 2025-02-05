function compute() {
    
    if (!validateAmount()){
        return;
    }
    
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
     document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        " at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}

function updateRate(){
    
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval + "%";
}

function validateAmount() {

    var principal = document.getElementById("principal").value;

    if (principal.trim() == ""){
        alert("Enter a valid number.");
        document.getElementById("principal").focus()
        return false;
    }

    var checkPrincipal = parseInt(principal);

    if (checkPrincipal<=0){
        alert("Enter a positive number.");
        document.getElementById("principal").focus()
        return false;
    }

    return true;
}

