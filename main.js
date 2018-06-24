$(".toggleBtn").click(function () {
    $(this).toggleClass('active');

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).toggleClass('hidden');

    var activePanels = 4 - $('.hidden').length;
    console.log(activePanels)

    $('.panel').width(($(window).width() / activePanels) - 21)

})

function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $('#cssPanel').val() + "</style></head><body>" + $('#htmlPanel').val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($('#javascriptPanel').val());
}

$('.panel').height($(window).height() - $('header').height());

updateOutput();

$('textarea').on('change keyup paste', function () {
    updateOutput();
})