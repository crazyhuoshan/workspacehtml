require('./index.less');

$('.J_menu').on('click',function(e){
    e.stopPropagation();
    $('.dropLis').animate({'top':0})
});

$(document).on('click',function(){
    $('.dropLis').animate({'top':-1000})
});