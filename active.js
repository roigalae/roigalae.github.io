    $(document).ready(function() {
        $( ".nav-item" ).bind( "click", function(event) {
            var clickedItem = $( this );
            $( ".nav-item" ).each( function() {
                $( this ).removeClass( "active" );
            });
            clickedItem.addClass( "active" );
        });
    });