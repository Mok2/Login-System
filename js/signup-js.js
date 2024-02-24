var nameInput=document.getElementById("signUpName");
var emailInput=document.getElementById("signUpEmail");
var passwordInput=document.getElementById("signUpPassword");
var signUpBtn=document.getElementById("signUpButton");
var signUpCompleteBtn=document.getElementById("signUpCompleteButton");
var mainName=document.getElementById("mainName");
var emailList=[];
if (localStorage.getItem("Emails")!=null){
    emailList=JSON.parse(localStorage.getItem("Emails"));
}
signUpCompleteBtn.addEventListener("click",function(){AddInfo();});
nameInput.addEventListener("input",function(){NameValidate();});
emailInput.addEventListener("input",function(){EmailValidate();});
passwordInput.addEventListener("input",function(){PasswordValidate();});
function AddInfo(){
if(FullValidation()==true){
    var Info={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    emailList.push(Info);
    localStorage.setItem("Emails",JSON.stringify(emailList));
    document.getElementById("signUpGuide").classList.add("d-none");
    location.href="../index.html";
}
else{
    signUpCompleteBtn.removeAttribute("href");
    document.getElementById("signUpGuide").classList.remove("d-none");
}
}
function NameValidate(){
    nameRejex=/^[a-zA-Z][a-z]{2,14}$/;
    if(nameRejex.test(nameInput.value)){
        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
        document.getElementById("nameGuide").classList.add("d-none");
        return true;
    }
    else{
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        document.getElementById("nameGuide").classList.remove("d-none");
        return false;
    }
}
function EmailValidate(){
    emailRejex=/^.{5,50}@[a-z]{4,12}\.com$/;
    if(emailRejex.test(emailInput.value)){
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        document.getElementById("emailGuide").classList.add("d-none");
        return true;
    }
    else{
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        document.getElementById("emailGuide").classList.remove("d-none");
        return false;
    }
}
function PasswordValidate(){
    passwordRejex=/^([A-Z]{1,2})([a-z]{1,8})(\d{2,11})$/;
    if(passwordRejex.test(passwordInput.value)){
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        document.getElementById("passwordGuide").classList.add("d-none");
        return true;
    }
    else{
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        document.getElementById("passwordGuide").classList.remove("d-none");
        return false;
    }
}
function FullValidation(){
    if(NameValidate()==true&&EmailValidate()==true&&PasswordValidate()==true){
        return true;
    }
    else{
        return false;
    }
}