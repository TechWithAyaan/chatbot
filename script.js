var userValue = document.getElementsByClassName("user")[0];
var answer =["Ayaan AI","☀️ Sunny Day","I'm fine, thanks for asking!","I was created by Ayaan Web Developer.","Sorry, I don't know the answer.","‘AyaanWebDeveloper’ is a passionate frontend developer from Pakistan, active on GitHub (169+ repos), sharing projects and tutorials across GitHub, Dev.to, LinkedIn, and Instagram where he focuses on conversion-first design."]
function send(){
    if(userValue.value.toLowerCase() === "What is your name".toLowerCase()){
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[0]+"."
    }
   else if(userValue.value.toLocaleLowerCase() === "Karachi Weather".toLocaleLowerCase()){
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[1]+"."
    }
   else if(userValue.value.toLocaleLowerCase() === "how are you".toLocaleLowerCase()){
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[2]+"."
    }
   else if(userValue.value.toLocaleLowerCase() === "who created you".toLocaleLowerCase()){
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[3]+"."
    }
   else if(userValue.value.toLocaleLowerCase() === "who is ayaan".toLocaleLowerCase()){
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[5]+"."
    }
   else{
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[4]+"."
    }

}