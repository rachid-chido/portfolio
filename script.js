$(document).ready(function(){
    $(window).scroll(function(){
    if(this.scrollY > 25){
         $('.navbar').addClass("sticky");
     }else{
        $('.navbar').removeClass("sticky");
    }
    });


    //toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 

});

