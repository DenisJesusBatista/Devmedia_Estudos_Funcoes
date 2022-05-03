let lista_numeros = [1, 3, 5, 10];

const retorna_soma = (numeros) => {

    let soma = 0;


    for (const numero in numeros) {
        soma = soma + numero;
    }

    soma++;

}

let resultado = retorna_soma(lista_numeros);

console.log("A soma dos resultados é igual a : " + resultado);