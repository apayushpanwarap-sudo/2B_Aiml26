function validate() {

    // Get values from form
    let name = document.getElementById("UName").value.trim();
    let mobile = document.getElementById("Phone").value.trim();
    let email = document.getElementById("Email").value.trim();
    let password = document.getElementById("Password").value;
    let rePassword = document.getElementById("RePassword").value;


    // 1. Name validation
    if (name === "") {
        alert("Not Submitted: Please enter your name");
        return false;
    }


    // 2. Mobile number validation
    if (mobile === "") {
        alert("Please enter your mobile number");
        return false;
    }

    // Check exactly 10 digits
    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits");
        return false;
    }


    // 3. Email validation
    if (email === "") {
        alert("Please enter your email");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }


    // 4. Password validation
    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    if (password.length < 6 || password.length > 15) {
        alert("Password must be between 6 and 15 characters");
        return false;
    }


    // 5. Confirm password
    if (rePassword === "") {
        alert("Please confirm your password");
        return false;
    }

    if (password !== rePassword) {
        alert("Password and Re-Password do not match");
        return false;
    }


    // Everything is valid
    alert("Form submitted successfully!");
    return true;
}