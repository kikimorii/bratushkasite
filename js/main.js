$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .header_menu_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});