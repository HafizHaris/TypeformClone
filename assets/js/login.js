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

window.gapi.client
        .init({
          clientId:'434226071651-hafcjpqmp07tt5rjebs6maq1nhl5rm60.apps.googleusercontent.com',
          scope: "haris.khan@techno-soft.com",
          plugin_name:'Typeformclone'
});

// login with google
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

