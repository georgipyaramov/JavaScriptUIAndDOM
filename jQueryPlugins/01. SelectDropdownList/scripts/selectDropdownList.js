(function($) {
    $.fn.dropdown = function() {
        var $this = $(this),
            $thisOptions = $this.find('option'),
            $container = $('<div>'),
            $optionsList = $('<ul>'),
            $option = $('<li>'),
            expanded = false;

        $this
            .css('display', 'none');
        $container
            .addClass('dropdown-list-container')
            .insertAfter($this);
        $optionsList
            .addClass('dropdown-list-options')
            .css('list-style-type', 'none')
            .appendTo($container);

        for (var i = 0; i < $thisOptions.length; i++) {
            $option
                .clone()
                .addClass('dropdown-list-option')
                .attr('data-value', $thisOptions[i].value - 1)
                .text($thisOptions[i].text)
                .appendTo($optionsList);
        }

        $optionsList
            .children()
            .first()
            .addClass('selected');
        $optionsList
            .children()
            .css('display', 'none');
        $optionsList
            .children('.selected')
            .css('display', 'block');

        $optionsList.on('click', function() {
            if (expanded) {
                hide();
            }
            else {
                expand();
            }
        });

        $optionsList
            .children().on('click', function(ev) {
                var $target = $(ev.target);
                $optionsList
                    .children('.selected')
                    .removeClass('selected');
                $target
                    .addClass('selected');
            })



        function expand() {
            $optionsList
                .children()
                .css('display', 'block');
            expanded = true;
        }

        function hide() {
            $optionsList
                .children()
                .css('display', 'none');
            $optionsList
                .children('.selected')
                .css('display', 'block');
            expanded = false;
        }

    }
}(jQuery));