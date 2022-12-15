    $(document).ready(function() {
        $( ".nav-link" ).bind( "click", function(event) {
            var clickedItem = $( this );
            $( ".nav-link" ).each( function() {
                $( this ).removeClass( "active" );
            });
            clickedItem.addClass( "active" );
        });
    });