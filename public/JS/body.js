$(document).ready(function(){
    let w_head = $('.head').outerWidth();
    console.log(w_head);
    let w_body = $('.body').outerWidth();
    console.log(w_body);
    w_content =w_body -  w_head + 2;
    if($(window).width() > 992) {
        $('.body-item').css({'width':w_content + 'px'})
    }
})