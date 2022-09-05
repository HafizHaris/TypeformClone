const ValidateField = (FieldId) => {
    const FieldValue = document.getElementById(FieldId).value;
    if(FieldValue.length == 0){
        document.getElementById(`${FieldId}-error`).style.display = "block";
        return false;
    }
    document.getElementById(`${FieldId}-error`).style.display = "none";
    return true;
}
function ValidateLoginForm(){
    if(ValidateField("login-email") && ValidateField("login-password"))
        return true;
    return false;
}

// validate on typing and leaving input fields
const LoginEmail = document.getElementById("login-email");
const LoginPassword = document.getElementById("login-password");

LoginEmail.onfocusout = LoginEmail.onkeyup = function() {
    ValidateField("login-email");
};
LoginPassword.onfocusout = LoginPassword.onkeyup = function() {
    ValidateField("login-password");
};