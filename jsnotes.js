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

// function createElement(tag, text, classe, append) {
//     var newElement = document.createElement(tag);
//     var txtElement = document.createTextNode(text);
//     newElement.className += classe;
//     newElement.appendChild(txtElement);
//     append.appendChild(newElement);
//     return append;
// }

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

function cadastroDOM()  {
    var title = document.getElementById('note-input-title').value;
    
    var task = document.getElementsByClassName('items-list__input');
    
    var article = document.getElementById('post-it');

    var newElement = document.createElement('h1');
    var txtElement = document.createTextNode(title);
    newElement.appendChild(txtElement);
    article.appendChild(newElement);

    


    for (var i = 0; i < task.length; i++) {

        console.log(task[i].value);    

        var newElement = document.createElement('p');
        var txtElement = document.createTextNode(task[i].value);
        newElement.appendChild(txtElement);
        article.appendChild(newElement);

    }    
    
}