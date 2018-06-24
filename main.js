$(".toggleBtn").click(function () {
    $(this).toggleClass('active');
})

$('.panel').height($(window).height() - $('header').height())
