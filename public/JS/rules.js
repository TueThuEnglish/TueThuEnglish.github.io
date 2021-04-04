$(document).ready(function(){
   $('.title-rules').slideUp();
    $('.rules-item .title-content .add-title').click(function(){
     if(   $(this).hasClass('active')){
         $('.add-title').removeClass('active');  
     }
     else{
        $('.add-title').removeClass('active'); 
        $(this).addClass('active');
     }
        active();
    })
})
function active(){
    $.each($('.add-title'), function(){$(this).hasClass('active')?$(this).next().slideDown():$(this).next().slideUp()});
}