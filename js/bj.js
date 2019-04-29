$(function(){
    $('.tab_t').on('tap',function(){
        if ($('.dsnone').attr('class').length==6) {
            $('.mubu').addClass('active_b')
            $('.dsnone').addClass('active_b')	
        }else{
            $('.mubu').removeClass('active_b')
            $('.dsnone').removeClass('active_b')	
        }
    }) 
    $('.xuanzhe li').on('tap',function(){
         a = $(this).index();
        console.log($('.content .item'+a+'').siblings())
        $('.tab_t').text($(this).text())
        if (a==2) {
        	$('.wu').addClass('active_b').siblings().removeClass('active_b');
        } else{
        	$('.content .item'+a+'').addClass('active_b').siblings().removeClass('active_b')
        }
        $('.mubu').removeClass('active_b')
        $('.dsnone').removeClass('active_b')
        $(this).addClass('active').siblings().removeClass('active')
    })
})