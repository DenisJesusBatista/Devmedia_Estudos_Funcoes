function verifica_tamanho_senha(senha) {

    let valida_tamanho;

    if (senha.length >= 10) {
        valida_tamanho = true;
    } else {
        valida_tamanho = false;
    }

}

let senha_cadastro = "minha_senha";

if (verifica_tamanho_senha(senha_cadastro)) {
    console.log("A senha possui o mínimo de 10 caracteres");
} else {
    console.log("A senha não possui o mínimo de 10 caracteres");
}