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

function addItem(el) {
    var itemList = el;
    var newElement = document.createElement('input');
    newElement.className += 'text-input items-list__input';
    itemList.appendChild(newElement);

    var newElement = document.createElement('button');
    var txtElement = document.createTextNode('-');
    newElement.className += 'notes-items__btn btn-remove';
    newElement.onclick = removeItem;
    newElement.appendChild(txtElement);
    itemList.appendChild(newElement);
}

const removeItem = function (el) {
    var itemList, btn, input;
    itemList = el.toElement ? el.toElement.previousElementSibling.parentElement : document.getElementById('items-list');

    if (el.toElement) {
        itemList = el.toElement.previousElementSibling.parentElement;
        input = el.toElement.previousElementSibling;
        btn = el.toElement;
    }else {
        itemList = document.getElementById('items-list');
        input = el;
        btn = el.nextElementSibling;
    }
    itemList.removeChild(input);
    itemList.removeChild(btn);
}

const clearAll = () => {
    console.log("clicked");
    document.getElementById('note-input-title').value = "";
    const elements = document.querySelectorAll('.items-list__input');

    for (let i=0; i < elements.length; i++) {
        console.log(elements[i]);
        removeItem(elements[i]);
    }
    
}


function search() {
    var input = document.getElementById("search").value.toUpperCase();

    console.log(notes);

    // for each
    notes.forEach(function (element) {
        var title = element.title.toUpperCase();

        var element = document.getElementById(`item-${element.id}`);

        if (element != null) {
            if (title.indexOf(input) > -1)
                element.style.display = "";
            else
                element.style.display = "none";
        }
    }, this);
}

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


console.log("initialize");

document.querySelector("#register").addEventListener("click", () => {
    console.log("clicked");
    
    const obj = {};
    obj.title = document.getElementById('note-input-title').value;
    obj.items = document.querySelectorAll('.items-list__input');
    // console.log(obj);

    const appendObj = validateItems(obj);

    if(appendObj) {
        createPostIt(obj);
    }
});

const validateItems = (obj) => {

    let empty = 0;

    Object.values(obj.items).forEach(item => {
        if(item.value.trim().length === 0) {
            empty += 1;
        }
    });

    if(empty !== 0 || !obj.title) {
        return false;
    } else {
        return true;
    }
};

const createPostIt = (obj) => {
    let template = `<div class="post-it"><h1>${obj.title}</h1>`;

    Object.values(obj.items).forEach(item => {
        template += `<p>${item.value}</p>`;
    });

    template += `</div>`;

    const el = document.getElementById('post-it').innerHTML;
    document.getElementById('post-it').innerHTML = el + template;
    clearAll();
    
}