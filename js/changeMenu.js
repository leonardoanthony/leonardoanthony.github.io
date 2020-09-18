$(function(){

    var a = $('section.menu nav ul li a');
   

    a.eq(0).addClass('selected');

    a.click(function(){
        a.removeClass('selected');
        $(this).addClass('selected');
    })



});