// SHOW TEXT IN PRACTICE
$('.click_item').click(function(){
    var datatarget = $(event.target).attr("id");
    var parent = $(event.target).parent();
    $(".wholetext").hide();
    $(".areas2").removeClass("selected");
    $("[target="+datatarget+"]").show();
    parent.addClass("selected");
});

// var offset = $('.anchory').offset();
// var scrollto = offset.top - 55; // minus fixed header height
// $('html, body').animate({scrollTop:scrollto}, 0);
