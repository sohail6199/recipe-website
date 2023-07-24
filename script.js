// ---------singup and sign in form movement-----------------------------------------------------------------


var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

// moves register page to left and make it display ,hiding login page

function register(){
x.style.left="-400px"
y.style.left="50px"
z.style.left="110px"}

// moves login page right and make it display ,hiding register page 
function login(){
x.style.left="50px"
y.style.left="450px"
z.style.left="0"}




// ----------email validaton-----------------------------------------------------------------------



var email = document.forms['form']['email'];
    var password = document.forms['form']['password'];

    var pass_err = document.getElementById('pass_error');
    var email_err = document.getElementById('email_error');

    email.addEventListener('input', email_Verify);
    password.addEventListener('input', pass_Verify);

    function validated() {    // checking for user id length and displays dialogue box if length not valid
      if (email.value.length < 9) {
        email.style.border = "3px solid red";
        email_err.style.display = "block";
        email.focus();
        return false;
      }   


      //  checking for password length and shows dialogue box if not valid length

      if (password.value.length < 6) {
        password.style.border = "3px solid red";
        pass_err.style.display = "block";
        password.focus();
        return false;
      }
      return true;
    }



    var verEmail = '20ec115@jssaten.ac.in';
    var verPass = 'Password';

    function email_Verify() {    // checks if user id length is valid and removes dialogue box
      if (email.value.length >= 8) {
        email.style.border = "5px solid green";
        email_err.style.display = "none";
      } else {
        email.style.border = "3px solid red";
        email_err.style.display = "block";
      }
    }

    function pass_Verify() {    //checks if password length is valid and removes dialogue box
      if (password.value.length >= 5) {
        password.style.border = "5px solid green";
        pass_err.style.display = "none";
      } else {
        password.style.border = "3px solid red";
        pass_err.style.display = "block";
      }
    }

    document.getElementById('form').addEventListener('submit', function(event) {
      if (!validated()) {
        event.preventDefault(); // Prevent form submission if validation fails
      } else {
        if (email.value === verEmail && password.value === verPass) {
          // Redirect to the next page if both email and password are correct
          window.location.href = 'submission.html';
         
          return false; // Prevent default form submission 
        
        }
      }
    });