var isInnerTextInTheMomentHide = true,
    tasks = document.createElement('ul'),
    showHideButton = document.getElementById('show-hide-btn'),
    addButton = document.getElementById('add-btn'),
    deleteButton = document.getElementById('delete-btn');

document.body.appendChild(tasks);

showHideButton.addEventListener('click', onShowHideButtonClick, false);
addButton.addEventListener('click', onAddButtonClick, false);
deleteButton.addEventListener('click', onDeleteButtonClick, false);

document.body.addEventListener('click', function(ev) {
    var target = ev.target,
        alltasks = document.getElementsByTagName('p');

    if (target.classList.contains('task')) {
        for (var i = 0; i < alltasks.length; i++) {
            alltasks[i].classList.remove('selected')
        }

        target.classList.add('selected');
    }
});

function onAddButtonClick() {
    var
        task = document.createElement('li'),
        input = document.getElementsByTagName('input')[0];

    task.innerText = input.value;
    task.classList.add('task');
    tasks.appendChild(task);
    input.value = '';

}

function onDeleteButtonClick() {
    var taskToBeRemoved = document.getElementsByClassName('selected')[0];
    taskToBeRemoved.parentNode.removeChild(taskToBeRemoved);
}

function onShowHideButtonClick() {
    var showHideBtn = document.getElementById('show-hide-btn');

    if (isInnerTextInTheMomentHide) {
        showHideBtn.innerText = 'Show list';
        isInnerTextInTheMomentHide = false;
        tasks.style.display = 'none';
    }
    else {
        showHideBtn.innerText = 'Hide list';
        isInnerTextInTheMomentHide = true;
        tasks.style.display = 'block';
    }
}
