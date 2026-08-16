
const username = document.getElementById("username")
const usernamePattern = /^[a-zA-Z0-9_.]+$/;
const usernameError = document.getElementById("username-error");

const email = document.getElementById("email")
const emailError = document.getElementById("email-error");

const password = document.getElementById("password")
const passwordError = document.getElementById("password-error");

const confirmpassword = document.getElementById("confirmpassword")
const confirmpasswordError = document.getElementById("confirmpassword-error");

const registerform = document.getElementById("registerform")



registerform.addEventListener("submit",function(event){
    event.preventDefault();

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmpasswordError.textContent = "";


    if(username.value=== "" ){
    // alert("Username cannot be empty");
    usernameError.textContent = "Username cannot be empty"
}
    
    else if (!usernamePattern.test(username.value)) {
    // alert("Username can only contain letters, numbers, _ and .");
    usernameError.textContent = "Invalid username";
}

    else if(email.value=== "" ){
    // alert("Please Fill Your Email@");
    emailError.textContent = "Email cannot be empty"
}


    else if(password.value=== "" ){
    // alert("Enter Your Password First");
    passwordError.textContent = "password cannot be empty"
}
    else if (password.value.length < 8) {
    passwordError.textContent = "Password must be 8 character long at least";
}

    else if(confirmpassword.value=== "" ){
    // alert("Please Fill Confirm Password Section");
    confirmpasswordError.textContent = "Confirm Password cannot be empty"
}

    else if(password.value !== confirmpassword.value){
        confirmpasswordError.textContent = "Password must be same";
    }

    else{
        const data = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        fetch("http://localhost:3000/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response=>{
            if(response.ok){
                alert("Form Submitted!");
            } else {
                alert("Submission failed");
            }
        })
        .catch(error =>{
            console.error("Error:", error);
        });
}});