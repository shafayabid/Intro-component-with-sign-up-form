function ValidateEmail()
{
    var email = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.match(mailformat))
    {
        return true;
    }
    else
    {
        return false;
    }
}


function validation()
{
    let first_name = document.getElementById("First Name").value;
    let last_name = document.getElementById("Last Name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    email_validation=ValidateEmail();

    if (first_name === "")
    {
        document.getElementById("First Name").style.border= "2px solid red";
        document.getElementById("fname").innerHTML = "First Name cannot be empty";    
    }
    else
    {
        document.getElementById("First Name").style.border= "";
        document.getElementById("fname").innerHTML = ""; 
    }

    if (last_name === "")
    {
        document.getElementById("Last Name").style.border= "2px solid red";
        document.getElementById("lname").innerHTML = "Last Name cannot be empty";    
    }
    else
    {
        document.getElementById("Last Name").style.border= "";
        document.getElementById("lname").innerHTML = "";  
    }

    if ( email_validation === false)
    {
        document.getElementById("email").style.border= "2px solid red";
        document.getElementById("mail").innerHTML = "Looks like this is not an email";    
    }
    else
    {
        document.getElementById("email").style.border= "";
        document.getElementById("mail").innerHTML = "";    
    }

    if (password === "")
    {
        document.getElementById("Password").style.border= "2px solid red";
        document.getElementById("pass").innerHTML = "Password cannot be empty";    
    }
    else
    {
        document.getElementById("Password").style.border= "";
        document.getElementById("pass").innerHTML = "";       
    }

}
