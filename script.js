$(function(){
    $("#acMenu dt").on("click", function() {
        $('.fa-chevron-down', this).toggleClass('fa-rotate-180');
        $(this).next().slideToggle();
});
});
