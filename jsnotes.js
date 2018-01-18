var notes = [{
        id: 1,
        title: "test",
        items: ["Fazer html", "Deixar responsivo"]
    },
    {
        id: 2,
        title: "Faça uma lista",
        items: ["Para reorganizar a lista, arraste e solte os itens", "Assinale as tarefas concluídas", "Os itens assinados são movidos automaticamente para o fim da lista"]
    }
];

function createElement(tag, text, classe, append) {
    var newElement = document.createElement(tag);
    var txtElement = document.createTextNode(text);
    newElement.className += classe;
    newElement.appendChild(txtElement);
    append.appendChild(newElement);
    return append;
}

function addItem() {
    var itemList = document.getElementById('items-list');

    var newElement = document.createElement('input');
    newElement.className += 'text-input items-list__input';
    itemList.appendChild(newElement);

    var newElement = document.createElement('button');
    var txtElement = document.createTextNode('-');
    newElement.className += 'notes-items__btn btn-remove';
    newElement.addEventListener("click", removeItem);
    newElement.appendChild(txtElement);
    itemList.appendChild(newElement);
}

function removeItem() {
    console.log('teste');
}

function search(){
    var input = document.getElementById("search").value.toUpperCase();

    notes.forEach(function(element) {
    }, this);
}