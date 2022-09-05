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

  // function to get response
  function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    alert(responsePayload.name);
    // img.src = responsePayload.picture;
    // id.innerHTML = responsePayload.sub;
    // email.innerHTML = responsePayload.email;
}

window.onload = function () {
    google.accounts.id.initialize({
        // replace your client id below
        client_id: "434226071651-hafcjpqmp07tt5rjebs6maq1nhl5rm60.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        auto_select: true,
        auto: true
    });
    google.accounts.id.renderButton(
        document.getElementById("google-button"),
        { theme: "filled_blue", size: "medium", width: '200' }  // customization attributes
    );
    // also display the One Tap dialog on right side
    // important for auto login
    // google.accounts.id.prompt(); 
}

// function to decode the response.credential
function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function signOut() {
    google.accounts.id.disableAutoSelect();
    location.reload();
}