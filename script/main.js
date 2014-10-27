$(document).ready(function() {
    $(".fatality").click(function(){
    	$(".content").children().hide();
    	$(".cont_fatality").show();
    });
    $(".viuva").click(function(){
    	$(".content").children().hide();
    	$(".cont_viuva").show();
    });
    $(".fortaleza").click(function(){
    	$(".content").children().hide();
    	$(".cont_fortaleza").show();
    });
    $(".mudanca").click(function(){
    	$(".content").children().hide();
    	$(".cont_mudanca").show();
    });
    $(".montarias").click(function(){
    	$(".content").children().hide();
    	$(".cont_montarias").show();
    });

    $(".fancybox").fancybox();
});