var mainName=document.getElementById("mainName");
var emailList={};
if (localStorage.getItem("UserInfo")!=null){
    emailList=JSON.parse(localStorage.getItem("UserInfo"));
}
mainName.innerHTML=`Hello ${emailList.name}`;