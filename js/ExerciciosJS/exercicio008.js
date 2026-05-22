let idade = 17

// Verifica a classificação da idade
if (idade >= 0 && idade <= 18) {
    console.log("R$ 10");
} else if (idade >= 18 && idade <= 59) {
    console.log("R$ 20");
} else if (idade >= 60) {
    console.log("R$ 5");
}