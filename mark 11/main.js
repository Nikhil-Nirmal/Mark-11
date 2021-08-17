const birthdate = document.querySelector("#birthdate");
const luckyNum = document.querySelector("#lucky");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const reset = document.querySelector("#reset");
function find_sum(date){
    let sum = 0;
    for(i=0;i<date.length;i++){
        sum+= Number(date[i]);
    }
    console.log(sum)
    return sum;
}
function enter(){
    if (birthdate.value == ""){
        output.innerHTML = "Enter the Date first";
    }
    else if (luckyNum.value == ""){
        output.innerHTML = "Enter the Lucky number First";
    }
     else{
        var date1 = birthdate.value.split('-').join("");
        console.log(date1)
        let sum = find_sum(date1);
        console.log(sum)
        if (sum % Number(luckyNum.value) == 0 ) {
            output.innerHTML = 'Hurray You are a LUCKY person';
            document.getElementById("img").style.background = "url('cat.gif') center right no-repeat";
            document.getElementById("img").style.backgroundSize = "28%";
        }
        else {
            output.innerHTML = "Opps your birthday is'nt LUCKY";
            document.getElementById("img").style.background = "url('no3.gif') center right no-repeat";
            document.getElementById("img").style.backgroundSize = "20%";
            }
    }
}
function reset1(){
    birthdate.value = "";
    luckyNum.value = "";
    output.innerHTML = "";
    document.getElementById("img").style.background = "none";
}
