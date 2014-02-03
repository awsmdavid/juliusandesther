$(document).ready(function() {

    // Cache jQuery elements that you need so you only search for them once
    var $bioButton = $('a.bio'),
        $workButton = $('a.work'),
        $playButton = $('a.play'),
		$profileThumb = $('#profile-thumb');

    /**
     * Add a single click event that handles all link clicks.
     * Grab the relevant container based on the link ID, and grab the containers data-count attribute.
     * Use the data-count attribute to determine which containers to hide/show (only hide containers 'before' the current one)
     */
    $('a.button').on('click', function() {
        var $this = $(this),
            containerClass = $this.attr('id'),
            $article = $('article.' + containerClass),
            articleCount = parseInt($article.attr('data-count'), 10);

        // slideUp (hide) articles if their data-count attribute is less than the current one
        $('article')
            .filter(function(index){
                return $(this).attr('data-count') < articleCount;
            })
            .slideUp(900);

        // slideDown (show) articles if their data-count attribute is greater than or equal to the current one
        $('article')
            .filter(function(index){
                return $(this).attr('data-count') >= articleCount;
            })
            .slideDown(800);

        // Fade/unfade the thumbnail
        if (articleCount > 1 && !$profileThumb.is(':visible')) {
            $profileThumb.fadeIn('slow');
        } else if (articleCount === 1) {
            $profileThumb.fadeOut('slow');
        }
    });

});
