function onBtnClick() {
    var input = document.getElementsByTagName('input'),
        inputValue = input[0].value,
        body = document.getElementsByTagName('body');

    body[0].style.backgroundColor = inputValue;
}