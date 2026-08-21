const loginform = document.getElementById("loginform");

const email = document.getElementById("email");
const password = document.getElementById("password");




loginform.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = {
        email: email.value,
        password: password.value
    };

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
             if (data.message === "Login successful") {
        window.location.href = "dashboard.html";
    } else {
        alert(data.message);
    }
        })

});