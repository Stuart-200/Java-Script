function validate(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgBox = document.getElementById("messageBox");
    
    let message = "";

    if(email === ''){
        message = 'Enter an email';
        msgBox.style.color = 'red';
    } else if(password === ''){
        message = 'Enter a password';
        msgBox.style.color = 'red';
    } else if (age === ''){
        message = 'Enter your age';
        msgBox.style.color = 'red';
    } else {
        message = 'Login Successful';        message = 'Login Successful';
        msgBox.style.color = 'green';ox.style.color = 'green';
    }
    msgBox.innerText = message;
}