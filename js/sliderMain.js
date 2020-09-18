$(function(){

    var slider = $('.slider .slider-content');
    var indiceAtual = 0;
    var indiceMaximo = slider.length;
    var delay = 5000;

    initSlider();
    clickSlider()
    

    function initSlider(){
        slider.eq(0).fadeIn();
    }

    function clickSlider(){
        $('section.menu nav ul li').click(function(){

            

            slider.eq(indiceAtual).fadeOut();
           
            indiceAtual = $(this).index();

            console.log(indiceAtual)

            slider.eq(indiceAtual).fadeIn();
            
           return false;
        })
    }


});