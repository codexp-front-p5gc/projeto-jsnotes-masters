console.log("initialize");

document.querySelector("#register").addEventListener("click", () => {
    console.log("clicked");
    
    const obj = {};
    obj.title = document.getElementById('note-input-title').value;
    obj.items = document.querySelectorAll('.items-list__input');
    console.log(obj);

    const appendObj = validateItems(obj);

    if(appendObj) {
        createPostIt(obj);
    } else {

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

    document.getElementById('post-it').innerHTML = template;
}