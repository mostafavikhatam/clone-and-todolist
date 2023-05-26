let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    const text = document.createElement('p');
    text.classList.add('text-styling');
    text.innerText = inputField.value;
    toDoContainer.appendChild(text);
    inputField.value = "";
    text.addEventListener('click', function(){
        text.style.textDecoration = "line-through";
    })
    text.addEventListener('dblclick', function(){
        toDoContainer.removeChild(text);
    })
})