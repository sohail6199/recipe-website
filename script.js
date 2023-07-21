// ---------singup and sign in form movement-----------------------------------------------------------------


var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");


function register(){
x.style.left="-400px"
y.style.left="50px"
z.style.left="110px"}

function login(){
x.style.left="50px"
y.style.left="450px"
z.style.left="0"}




// ----------email validaton-----------------------------------------------------------------------



var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var pass_err=document.getElementById('pass_error');
var email_err=document.getElementById('email_error');
email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',pass_Verify);

function validated(){
        if(email.value.length < 9)
        {
                email.style.border="3px solid red";
                email_err.style.display="block";
                email.focus();
                return false;
        }
        if(password.value.length < 6 )
        {
                password.style.border="3px solid red";
                pass_err.style.display="block";
                password.focus();
                return false;
        }
}

   function email_Verify(){
     
        if(email.value.length>=8)
        {
        email.style.border="5px solid green";
        email_err.style.display="none";
        return true;
   }
}


   function pass_Verify(){
     
        if(password.value.length>=5)
        {
        password.style.border="5px solid green";
        pass_err.style.display="none";
        return true;
   }}


  