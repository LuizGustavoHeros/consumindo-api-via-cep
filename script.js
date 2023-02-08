async function buscaEndereco(cepDigit) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cepDigit}/json/`)
        var consultaConvertida = await consultaCep.json();
        if(consultaConvertida.erro){
            throw Error('Cep inváclido')
        }
        const cep = document.getElementById('cep')
        const endereco = document.getElementById('endereco')
        const numero = document.getElementById("numero")
        const complemento = document.getElementById("complemento")
        const bairro = document.getElementById("bairro")
        const cidade = document.getElementById("cidade")
        const uf = document.getElementById('estado')

        cep.value = consultaConvertida.cep;
        endereco.value = consultaConvertida.logradouro;
        numero.value = consultaConvertida.ddd;
        complemento.value = consultaConvertida.complemento;
        bairro.value = consultaConvertida.bairro
        cidade.value = consultaConvertida.localidade;
        uf.value = consultaConvertida.uf

        return consultaConvertida
    }catch (erro) {
        mensagemErro.innerHTML = `<p>Cep não exite</p>`
    }
}
var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))