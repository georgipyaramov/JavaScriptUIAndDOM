var students = [{
    'firstName': 'Peter',
    'lastName': 'Ivanov',
    'grade': '3'
},{
    'firstName': 'Milena',
    'lastName': 'Georgieva',
    'grade': '6'
},{
    'firstName': 'Gergana',
    'lastName': 'Borisova',
    'grade': '12'
},{
    'firstName': 'Boyko',
    'lastName': 'Petrov',
    'grade': '7'
}];

function generateTable(students) {
    var $table = $('<table>'),
        $header = $('<thead>'),
        $cellHeader = $('<th>'),
        $row = $('<tr>'),
        $cell = $('<td>');

    $table.css('border', 'solid')
        .css('border-collapse', 'collapse')
        .css('border-width', '1px');

    $row.css('border', 'solid')
        .css('border-width', '1px');

    $cell.css('border', 'solid')
        .css('padding', '5px')
        .css('border-width', '1px');

    $cellHeader.css('border', 'solid')
        .css('padding', '5px')
        .css('border-width', '1px');

    $header.append($cellHeader.clone().text('First name'))
        .append($cellHeader.clone().text('Last name'))
        .append($cellHeader.clone().text('Grade'));

    for (var i = 0; i < students.length; i++) {
        var $clonedRow = $row.clone();
        $clonedRow.append($cell.clone().text(students[i].firstName))
            .append($cell.clone().text(students[i].lastName))
            .append($cell.clone().text(students[i].grade));

        $table.append($clonedRow);
    }

    $table.prepend($header.clone());
    $('body').append($table);
}

$('#generate-table-btn').on('click', function() {
    generateTable(students);
});