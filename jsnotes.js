var counter = 0;
var counterPostit = 0;
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
    newElement.onclick = removeItem;
    newElement.appendChild(txtElement);
    itemList.appendChild(newElement);
}

const removeItem = function (el) {
    itemList.removeChild(el.toElement.previousElementSibling);
    itemList.removeChild(el.toElement);
}

// function search() {
//     var input = document.getElementById("search").value.toUpperCase();

//     console.log(notes);

//     // for each
//     notes.forEach(function (element) {
//         var title = element.title.toUpperCase();

//         var element = document.getElementById(`item-${element.id}`);

//         if (element != null) {
//             if (title.indexOf(input) > -1)
//                 element.style.display = "";
//             else
//                 element.style.display = "none";
//         }
//     }, this);

    // for
    // for (var i = 0; i < notes.length; i++) {
    //     var title = notes[i].title.toUpperCase();

    //     if (title.indexOf(input) > -1)
    //         document.getElementById(notes[i].id).style.display = "";
    //     else
    //         document.getElementById(notes[i].id).style.display = "none";
    // }

function cadastroDOM() {
    counterPostit++;
    var note = {
        id: counterPostit,
        items: []
    };
    var title = document.getElementById('note-input-title').value;
    note.title = title;

    var task = document.getElementsByClassName('items-list__input');

    var article = document.getElementById('post-it');

    var newArticle = document.createElement('article');
    newArticle.id = 'post-it-' + note.id;
    newArticle.className = 'post-it';

    var newElement = document.createElement('h1');
    var txtElement = document.createTextNode(title);
    newElement.appendChild(txtElement);
    newArticle.appendChild(newElement);

    for (var i = 0; i < task.length; i++) {

        console.log(task[i].value);
        note.items.push(task[i].value);
        var newElement = document.createElement('p');
        var txtElement = document.createTextNode(task[i].value);
        newElement.appendChild(txtElement);
        newArticle.appendChild(newElement);

    }
    article.appendChild(newArticle);
    notes.push(note);
    console.log(notes);
}