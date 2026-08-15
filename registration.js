
const username = document.getElementById("username")
const usernamePattern = /^[a-zA-Z0-9_.]+$/;

const email = document.getElementById("email")

const password = document.getElementById("password")

const confirmpassword = document.getElementById("confirmpassword")

const registerform = document.getElementById("registerform")
registerform.addEventListener("submit",function(event){
    event.preventDefault();

    if (!usernamePattern.test(username.value)) {
    alert("Username can only contain letters, numbers, _ and .");
}

    if(username.value=== "" ){
    alert("Userame cannot be empty");}
    
    else if (!usernamePattern.test(username.value)) {
    alert("Username can only contain letters, numbers, _ and .");
}

    else if(email.value=== "" ){
    alert("Please Fill Your Email@");}


    else if(password.value=== "" ){
    alert("Enter Your Password First");}
    else if (password.value.length < 8) {
    alert("Password must be at least 8 characters long");
}

    else if(confirmpassword.value=== "" ){
    alert("Please Fill Confirm Password Section");}

    else if(password.value !== confirmpassword.value){
        alert("Password must be same")
    }

    else{alert("Form Submitted!");}
    
});