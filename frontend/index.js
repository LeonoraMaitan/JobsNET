function consultarCep() {
    let elCep = document.getElementsByName('cep')[0];
    cep = /\d{8}/.exec(elCep.value);

    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET'
    }).then(function (resp) {
        resp.json().then(value => {
            document.getElementsByName('cidade')[0].value = value.localidade;
            document.getElementsByName('endereco')[0].value = value.logradouro;
            document.getElementsByName('bairro')[0].value = value.bairro;
            document.getElementsByName('estado')[0].value = value.uf;
        });
    });
}

function cadastrarCandidato(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const json = JSON.stringify(Object.fromEntries(data))

    fetch('http://localhost:3000/api/candidatos', {
        method: 'POST',
        body: json,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        resp.text().then(t => alert(t));
    });
}