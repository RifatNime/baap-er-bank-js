document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
   const emailField = document.getElementById('user-email');//id k dhorlo
   const userEmail = emailField.value;//user er deya value ta nilo
   //get password now
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
    //check email and password
   if(userEmail == 'sontaner@baap.com' && userPassword == 'secret'){
       window.location.href = 'banking.html';
   }
});
