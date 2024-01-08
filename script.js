function somar(){
    const num1 = Number(document.getElementById("somarNum1").value)    
    const num2 = Number(document.getElementById("somarNum2").value)    
    alert(num1 + num2)
}

document.getElementById("botaoSomar").addEventListener("click",somar) //adicionando um escutador de evento do tipo click no botão Somar