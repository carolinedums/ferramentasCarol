function somar(){
    let num1 = Number(document.getElementById("Num1").value)    
    let num2 = Number(document.getElementById("Num2").value)    
    alert(num1 + num2)
}

document.getElementById("botaoSomar").addEventListener("click",somar) 

function subtrair(){
    let num1 = Number(document.getElementById("Num1").value)
    let num2 = Number(document.getElementById("Num2").value)
    alert(num1-num2)
}
document.getElementById("botaoSubtrair").addEventListener("click",subtrair)