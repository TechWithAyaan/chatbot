var userValue = document.getElementsByClassName("user")[0];
var answer =["Ayaan AI","☀️ Sunny Day","I'm fine, thanks for asking!","I was created by Ayaan Web Developer.","Sorry, I don't know the answer."]
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
   else{
       document.getElementsByClassName("userVal")[0].innerHTML = "Q:- "+userValue.value+"?"
       document.getElementsByClassName("aiAnswer")[0].innerHTML = answer[4]+"."
    }

}