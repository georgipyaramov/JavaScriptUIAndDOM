// !!!ТЕЗИ ФУНКЦИИ РАБОТЯТ. СЕЛЕКТИРАТ ТОЧНИТЕ ДИВОВЕ,
// НО НЯМАМ ПРЕДСТАВА ЗАЩО НЕ ИСКАТ ДА ИЗКАРАТ "Selected" НА ВЛОЖЕНИЯ ДИВ.
// СЛОЖИЛ СЪМ " console.log() ЗА ДА МОЖЕ ДА СЕ ВИДИ, ЧЕ СА СЕЛЕКТИРАНИ.
// АКО МОЖЕШ ДА МИ ДАДЕШ НЯКАКВО ОБЯСНЕНИЕ ЩЕ СЪМ СУПЕР БЛАГОДАРЕН.!!!


function onGetElementByBtnClick() {
    var allDivs = document.getElementsByTagName('div'),
        directChildDivs = [];

    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs[i].parentNode instanceof HTMLDivElement) {
            directChildDivs.push(allDivs[i]);
        }
    }

    console.log(directChildDivs);

    for (var i = 0; i < directChildDivs.length; i++) {
        directChildDivs[i].innerHTML += '<strong>Selected</strong>'
    }
}



function onQuerySelectBtnClick() {
    var directChildDivs = document.querySelectorAll('div > div');

    for (var i = 0; i < directChildDivs.length; i++) {
        directChildDivs[i].innerHTML += '<strong>Selected</strong>'
    }

    console.log(directChildDivs);
}