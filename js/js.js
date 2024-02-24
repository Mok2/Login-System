var loginEmail=document.getElementById("loginEmail");
var loginPassword=document.getElementById("loginPassword");
var loginBtn=document.getElementById("loginCompleteButton");
var emailList=[];
if (localStorage.getItem("Emails")!=null){
    emailList=JSON.parse(localStorage.getItem("Emails"));
}loginBtn.addEventListener("click",function(){LoginCheck();});
function LoginCheck(){
for(var i=0;i<emailList.length;i++){
    if(loginEmail.value==emailList[i].email&&loginPassword.value==emailList[i].password){
        var userInfo={
            name:emailList[i].name,
            email:emailList[i].email,
            password:emailList[i].password
        }
        localStorage.setItem("UserInfo",JSON.stringify(userInfo));
document.getElementById("loginGuide").classList.add("d-none");
location.href="sign-up Page/main.html";

    }
    else{
        loginBtn.removeAttribute("href");
        document.getElementById("loginGuide").classList.remove("d-none");
    }
}
}