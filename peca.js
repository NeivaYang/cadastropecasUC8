let pesopeca = 101
let numpeca = 1
let nomepeca = "Disco de Freio"
let listapecas = ["disco de freio", "motor", "avvd", "xbcd"]

if(pesopeca > 100){
    console.log("peso adequado, podemos cadastrar")
} else {
    console.log("peso menor que 100g, não podemos cadastrar")
}

if (numpeca >= 10){
    console.log("capacidade maxima atingida")
} else{
    console.log("ainda há espaço para cadastro")
}
if (listapecas.lenhth >= 10){
    console.log("capacidade maxima atingida")
} else {
    console.log("ainda há espaço para cadastro na lista")
}
if (nomepeca.length < 3) {
    console.log("nome da peca inadequado, eh preciso ter 3 caracteres ou mais")
} else{
    console.log ("nome da peca eh valido")
}