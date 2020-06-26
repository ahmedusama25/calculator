function  getNumber(num){
    var result = document.getElementById("result")
    result.value += num;
    
}
function getResult(){  
    var result = document.getElementById("result")
    if (result.value == ""){
        alert("Please enter something to evaluates")
        result.value = " "
    }
    else{
    result.value = eval(result.value)
    }
}
function clrResult(){
    var result = document.getElementById("result")
    result.value = "" 
}
