const form = document.querySelector('#form-input');

const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();

});

function adicionarLinha () {
    const inputNome = form.querySelector('#nome');
    const inputTelefone = form.querySelector('#tel-number');
    
    if ( nomes.includes(inputNome.value) ) {
        alert(`Contato "${inputNome.value}" já foi adicionado.`);
        return;
    } else {
        nomes.push(inputNome.value);
        telefones.push( inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
