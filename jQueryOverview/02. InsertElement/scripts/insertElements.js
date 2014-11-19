var $divToBeAppended = $('<div>'),
    wrapper = $('#wrapper');

function appendAfter () {
    var $clonedDiv = $divToBeAppended
                        .clone()
                        .text('Div inserted after the original one');
    wrapper.append($clonedDiv);
}

function appendBefore() {
    var $clonedDiv = $divToBeAppended
                        .clone()
                        .text('Div inserted before the original one');
    wrapper.prepend($clonedDiv);
}

$('#append-btn').on('click', appendAfter);
$('#prepend-btn').on('click', appendBefore);
