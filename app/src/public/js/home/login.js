"use-script";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id: id.value,
        psword: psword.value,
    };

    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type" : "applicationjson"
        },
        body: JSON.stringify(req),
    });   
}