let slider=document.querySelector("#slider");
let passwordBox=document.querySelector("#password-box");
let sliderValue=document.querySelector("#slider-value");
let lowercase=document.querySelector("#lowercase");
let uppercase=document.querySelector("#uppercase");
let numbers=document.querySelector("#numbers");
let symbol=document.querySelector("#symbol");
let genButton=document.querySelector("#generate-button");

function genPassword(value,lowercase,uppercase,numbers,symbol){
    let totalLowercase="abcdefghijklmnopqrstuvwxyz";
    let totalUppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let totalNumbers="0123456789";
    let totalSymbol="!@#$%&*_/?";
    let sampleSpace="";
    if(lowercase==true)
    {
        //console.log(lowercase);
        sampleSpace+=totalLowercase;
    }
    if(uppercase==true){
        sampleSpace+=totalUppercase;
        //console.log(uppercase);
    }
        
    if(numbers==true)
        sampleSpace+=totalNumbers;
    if(symbol==true)
        sampleSpace+=totalSymbol;
    
    //console.log(sampleSpace.length);
    let password="";

    for(let i=0;i<value && sampleSpace.length;i++){
        let index=Math.floor(Math.random()*sampleSpace.length);
        password+=sampleSpace[index];
    }
    return password;
}


slider.addEventListener("input",function(){
    sliderValue.textContent=slider.value;
})

genButton.addEventListener("click",function(){
    let password=genPassword(slider.value,lowercase.checked,uppercase.checked,numbers.checked,symbol.checked);
    passwordBox.value=password;
})