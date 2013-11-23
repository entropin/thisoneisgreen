var currentImg = 0;
var numberOfItem;
var boxSize = 400;
var boxSpeed = 500;

$(function() {
numberOfItem = $('.graff-box').length;
$('#graff-wrapper').css({width:numberOfItem*boxSize});
$('#prev-btn').click(function (){
						   currentImg++;
						   if(currentImg > numberOfItem){
							   currentImg = 1;
						   }
//currentImg = Math.min((currentImg+1),numberOfItem);
$('#graff-wrapper').stop(true);
$('.graff-box:last').clone().prependTo('#graff-wrapper');
$('.graff-box:last').remove();
$('#graff-wrapper').css({left :-boxSize});
$('#graff-wrapper').animate({left:0}, 500);
 calk();
});
$('#next-btn').click(function (){
						   currentImg--;
						    if(currentImg <= 0){
							   currentImg = numberOfItem;
						   }
//currentImg = Math.max((currentImg-1),-numberOfItem );		   

$('#graff-wrapper').css({left :0});
$('#graff-wrapper').animate({left:-boxSize}, 500,function(){
$('.graff-box:first').clone().appendTo('#graff-wrapper');
$('.graff-box:first').remove();													  
$('#graff-wrapper').css({left :0});
$('#graff-wrapper').stop(true);
														  });

  calk();
//alert(currentImg);
});

	});

function calk(){
$('#calk').html(currentImg +"/"+numberOfItem);	
}

function resSetter(){
$('#graff-wrapper').stop();
$('.first-box').clone().prependTo('#graff-wrapper');
$('.first-box:last').remove();
//$('#graff-wrapper').css({left :-boxSize});
//$('#graff-wrapper').animate({left:0}, 500);
$('#graff-wrapper').css({left :0});
}
