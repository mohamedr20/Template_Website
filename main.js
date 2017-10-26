$(document).ready(function(){
    var top = $('#home').offset().top;
    var height = $('#home').outerHeight();
    var logo = $('.logo');
    console.log(top);
    console.log(height);
    console.log($(window).scrollTop())
    $(window).scroll(function(){
        if($(window).scrollTop()){
            console.log($(window).scrollTop())
        }
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
    // $(window).scroll(function(){
    //     if($(window).scrollTop()>top+height){

    //         $('.primary-nav').prepend('<li class="logo"><img src="https://fontmeme.com/permalink/171009/73c84eef0afb9e370b418699759cc8c4.png" alt="cursive-fonts" border="0"></li>')
    //     }
    //     else{
    //         $('.logo').detach()
    //         $('.primary-nav').prepend('<li class="logo"><img src="https://fontmeme.com/permalink/171007/4c41915440cae409e8665af38d8374a4.png" alt="cursive-fonts" border="0">')
    //     }
    // })
})