//limpa o formulário
const limparFormulario = (rua) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
}

//preenche os campos do formulário
const preencherFormulario = (rua) =>{
    document.getElementById('rua').value=rua.street;
    document.getElementById('bairro').value=rua.neighborhood;
    document.getElementById('cidade').value=rua.city;
    document.getElementById('uf').value=rua.state;
}

const pesquisarCep = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    const dados = await fetch(url);
    const rua =await  dados.json();
    if (rua.hasOwnProperty('errors')){
        document.getElementById('rua').value='Corrija o CEP';

    }else {
        preencherFormulario(rua);
    }
}

$("#cep").keypress(function() {
    $(this).mask('00.000-000');
});

document.getElementById('cep').addEventListener('mousemove',pesquisarCep);