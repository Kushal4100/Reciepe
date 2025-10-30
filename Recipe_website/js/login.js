function validateform(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const messages = document.getElementById("messages");

    if (username === "" || password === "") {
        message.innerHTML = "Error:Username or Password can't be empty";
        message.style.color = "red";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        return false;
    }
    else {
        document.getElementById("form-container").style.display = "none";
        messages.innerHTML = `Welcome, <strong>${username}</strong>! You are now logged in.`;
        messages.style.color = "green";
        setTimeout(()=>{
            window.location.href="index.html";
        },1000);    // second redirect
        


        return true;
    }
}
