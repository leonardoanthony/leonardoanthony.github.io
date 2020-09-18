$(function(){

    var slider = $('.slider .slider-content');
    var indiceAtual = 0;
    var link = $('section.menu nav ul li');

    initSlider();
    clickSlider()
    

    function initSlider(){
        slider.eq(0).fadeIn();
    }

    function clickSlider(){
        link.click(function(){

            slider.eq(indiceAtual).fadeOut();
           
            indiceAtual = $(this).index();

            slider.eq(indiceAtual).fadeIn();

            $('.menu-mobile ul').slideToggle();
            
           return false;
        })
    }


});