/*var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var today = date.getDay();
var now = date.getHours();
var patternDate = `${today} ${month} ${year} ${now} `;
var dataHora = document.querySelector('input#dataHora').value = patternDate; */

let divEventoAgendado = document.querySelector('#eventosAgendados');


function agendar(){
    let eventoTxt = document.querySelector('input#evento');
    let dataHora = document.querySelector('input#dataHora');
    
    if(!eventoTxt.value && !dataHora.value){
        alert("Por favor, preencha os campos antes de continuar.");
        return;
    }
    if(eventoTxt.value && !dataHora.value){
        alert("Por favor, selecione uma data.");
        return;
    }
    if(!eventoTxt.value && dataHora.value){
        alert("Por favor, defina um nome para o seu evento.");
        return;
    }
    const eventContainer = document.createElement('div');
    eventContainer.classList.add('eventItem')

    const nomeEvento = document.createElement('input');
    nomeEvento.type = "text";
    nomeEvento.value = eventoTxt.value;
    nomeEvento.setAttribute('readonly', 'readonly')

    const daHoraEvento = document.createElement('p');
    daHoraEvento.classList.add('eventDate')
    daHoraEvento.innerText = dataHora.value;

    const deletarEvento = document.createElement('i');
    deletarEvento.classList.add('fa-solid');
    deletarEvento.classList.add('fa-trash-can');
    deletarEvento.addEventListener('click', () => {
        divEventoAgendado.removeChild(eventContainer);
        upDateLocalStorage();
    });

    const editarEvento = document.createElement('i');
    editarEvento.classList.add('fa-solid');
    editarEvento.classList.add('fa-pencil');
    editarEvento.addEventListener('click', () => {
        
        nomeEvento.classList.toggle('editando')
        if(nomeEvento.classList == ('editando')){
            nomeEvento.removeAttribute('readonly')
            nomeEvento.focus()

            upDateLocalStorage();
            return;
        } else {
            nomeEvento.setAttribute('readonly', 'readonly');
        }
    });

    const checkEvento = document.createElement('i');
    checkEvento.classList.add('fa-solid');
    checkEvento.classList.add('fa-check');
    checkEvento.addEventListener('click', () => {
        nomeEvento.classList.toggle('realizado')
        daHoraEvento.classList.toggle('realizado')
    });


    eventContainer.appendChild(nomeEvento);
    eventContainer.appendChild(daHoraEvento);
    eventContainer.appendChild(editarEvento);
    eventContainer.appendChild(checkEvento);
    eventContainer.appendChild(deletarEvento);



    divEventoAgendado.appendChild(eventContainer);
    upDateLocalStorage();
}

//falta adicionar localStorage()
function alterarTema() {
    document.body.classList.toggle("light");
  };