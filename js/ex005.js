// VERIFICAR PELA IDADE, SE O VOTO É OBRIGATORIO, OPCIONAL OU NÃO VOTA!
// idade > 18 -> Obrigatorio
// idade < 16 -> Não Vota
// idade >= 16 < 18 -> Voto Opcional
//idade > 65 -> Voto Opcional

let idadePessoa = 70

if (idadePessoa < 16){
    console.log("Não vota!!")
} else if (idadePessoa < 18 || idadePessoa >= 65) {
    console.log("Voto Opcional")
}else{
    console.log("Voto Obrigatorio!!")
}