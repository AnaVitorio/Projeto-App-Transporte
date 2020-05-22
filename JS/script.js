function formatamoeda(valor){
    return valor.toFixed(2).replace(".",",")
  }
  
  function calcular(){
    distancia = inputDistancia.value
    minutos = inputTempo.value
    valor = (2 + (distancia*1.4) + (minutos*0.26))
    botaoCalculo.innerHTML="Total: R$ "+ formatamoeda(valor)
    
  }