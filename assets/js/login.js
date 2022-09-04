function ValidateField(FieldId){
    const FieldElement = document.getElementById(Field).value;
    if(Field.length == 0)
        document.getElementById($`{Field}-error`).style.display = "block";
}

function ValidateLoginForm(){
    ValidateField("login-email");
    ValidateField("login-password");
    
    return false;
}

