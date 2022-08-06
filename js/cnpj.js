
//limpa os campos do formulário
const limparCampo = (checagem) =>{
    document.getElementById('razao_social').value='';
    document.getElementById('nome_fantasia').value='';
    document.getElementById('Cep').value='';
    document.getElementById('telefone').value='';
}
//preenche os campos do formuário
const preencherCnpj = (checagem) =>{
    document.getElementById('razao_social').value=checagem.razao_social;
    document.getElementById('nome_fantasia').value=checagem.nome_fantasia;
    document.getElementById('Cep').value=checagem.cep;
    document.getElementById('telefone').value=checagem.ddd_telefone_1;
}


const pesquisarCnpj = async() =>{
    limparCampo();
    const cnpj = document.getElementById('cnpj').value;
    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
    const dados = await fetch(url);
    const checagem = await dados.json(); 
   
        preencherCnpj(checagem);
    } 
    

document.getElementById('cnpj').addEventListener('mousemove',pesquisarCnpj);

