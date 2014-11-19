(function($) {
    $.fn.messageBox = function(message) {
        var $this = $(this),
            messageAsHtml = $('<h1>'),
            opacity = 0;

        messageAsHtml.text(message);

        function fade() {
            $this.css('opacity', opacity.toString());
        }

        var fading = setInterval(function() {
            $this.append(messageAsHtml);
            if (opacity < 1) {
                opacity += 0.1;
            }
            else {
                clearInterval(fading);
            }
            fade()
        }, 100);

        setTimeout(function(){
            fading = setInterval(function() {
                $this.append(messageAsHtml);
                if (opacity >= 0) {
                    opacity -= 0.1;
                }
                else {
                    clearInterval(fading);
                    $this
                        .css('display', 'none');
                }
                fade()
            }, 100);
        }, 3000);







    }
}(jQuery));