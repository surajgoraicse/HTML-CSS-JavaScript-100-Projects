const input = document.querySelector('#input-box')
const button = document.querySelector('button')
const listContainer = document.querySelector('.task-container');
const body = document.querySelector('body');


// Adding task
button.addEventListener('click', () => addTask())
body.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addTask();
    }
})

// add task function

function addTask() {

    if (input.value == '') {
        alert('Please add a task')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value;
        input.value = '';
        let cross = document.createElement('span')
        cross.innerHTML = '\u00d7'
        li.appendChild(cross)
        listContainer.insertBefore(li, listContainer.children[0])
        saveData();
    }

}


//  toggle checked class and removing task

listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }
    saveData();
})


// creating local storage

function saveData() {
    localStorage.setItem('taskData', listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem('taskData')
}
showData();


