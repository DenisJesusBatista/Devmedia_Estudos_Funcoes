const retorna_meida = (nota_1, nota_2) => {
    let media = (nota_1 + nota_2) / 2;
    return media;

}

let media_aluno = retorna_meida(9, 8);
console.log("A média do aluno é:" + media_aluno);