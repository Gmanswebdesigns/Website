jQuery(document).ready( function() {

jQuery(window).scroll(function() {

    if ( jQuery(window).scrollTop() > 20) {
        jQuery(".navbar").addClass("fade-blue");
    } 

    else {
        jQuery(".navbar").removeClass("fade-blue");
    } 
});
});