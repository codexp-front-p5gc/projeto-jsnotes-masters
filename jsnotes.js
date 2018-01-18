var counter = 0;
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
    counter++;
    var itemList = document.getElementById('items-list');
    var newElement = document.createElement('input');
    newElement.className += 'text-input items-list__input';
    newElement.id = 'item-' + counter;
    itemList.appendChild(newElement);

    var newElement = document.createElement('button');
    var txtElement = document.createTextNode('-');
    newElement.className += 'notes-items__btn btn-remove';
    newElement.id = 'btn-' + counter;
    newElement.name = counter;
    newElement.addEventListener("click", removeItem);
    newElement.appendChild(txtElement);
    itemList.appendChild(newElement);
}

function removeItem() {
    var itemList = document.getElementById('items-list');
    var item = document.getElementById('item-' + event.target.name);
    var btn = document.getElementById('btn-' + event.target.name);
    itemList.removeChild(item);
    itemList.removeChild(btn);
}