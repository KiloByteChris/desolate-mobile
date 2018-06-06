$(document).ready(function() {

    $('#menuLink').click(function() {

        $('#content').toggleClass('hide');
        $('body').toggleClass('off');
        $('#mainLogo').toggleClass('hide');
        $('.navScreen').toggleClass('displayScreen');
        $('#footer').toggleClass('hide');
    });
});
