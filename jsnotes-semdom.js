console.log("initialize");

document.querySelector("#register").addEventListener("click", () => {
    console.log("clicked");
    const obj = {};
    obj.title = document.getElementById('note-input-title');
    obj.items = document.querySelectorAll('.items-list__input');

    validateItems(obj);
});

const validateItems = (obj) => {
    if(!obj.title) {
        return false;
    } else if(Object.values(items).length === 0) {
        return false;
    } else {
        return true;
    }
};