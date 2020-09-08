$(function(){
    var link = $('.link');
        link.click(function(){
			var selector = $(this).attr('href');
			var posicao = $(selector).offset().top;
            $('html,body').animate({scrollTop:posicao},700); 
            link.removeClass('selected');
            $(this).addClass('selected');
        })      
        
})