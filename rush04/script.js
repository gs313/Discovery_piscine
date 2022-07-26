$(document).ready(function() {

    $('#experience-timeline').each(function() {

        $this = $(this);
        $userContent = $this.children('div');

        $userContent.each(function() {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });


        $this.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) {
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    var options = {
        strings: ['Adventurer', 'Future Billionair', 'Dreamer'],
        typeSpeed: 200,
        backSpeed: 100,
        loop: true
    };

    var typed = new Typed('.typing', options);

    $('#view-more-projects').click(function(e) {
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

    $("#current-year").text(new Date().getFullYear());

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome) {
        $('#iframeAudio').remove()
    } else {
        $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
    }
})