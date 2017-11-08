$(document).ready(function(){
    // var top = $('#home').offset().top;
    // var height = $('#home').outerHeight();
    var logo = $('.logo');

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active')
        $('.main-nav').toggleClass('show')
    })

    $(window).scroll(function(){
        if($(window).scrollTop()<276){
            $('.nav').removeClass('background-white')
            $('.primary-nav').removeClass('background-white')
        }
        if($(window).scrollTop()>=276){
            $('.nav').addClass('background-white');
            $('.primary-nav').addClass('background-white');
            $(logo).addClass('text-black');

            $('.primary-nav').hover(function(){
                $(this).css('color','black')
            })
        }
        else{
            $(logo).removeClass('text-black text-white').addClass('text-white')
        }
    })
});

console.log(window.scrollTop())