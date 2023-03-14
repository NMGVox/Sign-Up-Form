function validate(e){
    let password = document.querySelector("#pw");
    let warning = document.querySelector(".pass_warning");
    console.log(confirm_password.value);
    if (password.value === confirm_password.value){
        confirm_password.setCustomValidity("");
        warning.style.visibility='hidden';
        return;
    }
    confirm_password.setCustomValidity("Passwords do not match!");
    warning.style.visibility='visible';
    return;
}

let confirm_password = document.querySelector("#confirm_pw");
confirm_password.addEventListener('input', validate);