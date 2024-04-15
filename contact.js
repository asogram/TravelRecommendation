let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("fname");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if (name.value == "" || email.value == "" || message.value == "") {
        alert("Ensure you input a value in fields!");
    } else {
        alert("This form has been successfully submitted!");
        console.log(
            `This form has a username of ${name.value} and email of ${email.value} and message of ${message.value}`
        );
        name.value = "";
        email.value = "";
        message.value = "";
    }
});