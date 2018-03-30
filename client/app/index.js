var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    // Cancela o comportamento padrão do evento submit (recarrega a página)
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {
        // Cria uma td sem informações
        var td = document.createElement('td');

        td.textContent = campo.value;

        tr.appendChild(td);
    });

    // Nova td que armazenará o volume de negociação
    var tdVolume = document.createElement('td');

    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    // Limpa o campo da data
    campos[0].value = '';

    // Limpa o campo da quantidade
    campos[1].value = '';

    // Limpa o campo do valor
    campos[2].value = '';

    // Foca no campo da data
    campos[0].focus();
});