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

function frase(){
    let text1 = (document.getElementById("text1").value)
    let text2 = (document.getElementById("text2").value)
    alert(text1 + " " + text2)
   
}
document.getElementById("botaoConcatenar").addEventListener("click",frase)