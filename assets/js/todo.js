$("ul").on("click", "li", function() {
    $(this).toggleClass("crossed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$("#add").click(function() {
    $("input").fadeToggle();
});