$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.hd').addClass('sticky');
        }else{
            $('.hd').removeClass('sticky');
        }
    })

})