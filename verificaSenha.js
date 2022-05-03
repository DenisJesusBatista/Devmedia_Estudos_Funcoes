function verifica_tamanho_senha(senha) {

    let valida_tamanho;

    if (senha.length >= 10) {
        valida_tamanho = true;
    } else {
        valida_tamanho = false;
    }

    return valida_tamanho;

}