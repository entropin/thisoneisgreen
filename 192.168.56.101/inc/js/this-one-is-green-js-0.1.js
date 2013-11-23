$(function(){
var iconPossArray;
var iconSelector;

/////////////////////////////////////////
$("#main-menu li").hover(iconHover,iconOff);  
function iconHover(){
	iconSelector = $("#nav-icon ."+$(this).attr('class').split(' ')[0]+" a");
	iconSelector.stop();
	iconPossArray = iconSelector.css('backgroundPosition').split(' ');
	if(iconSelector.hasClass('single_state')){
	iconSelector.css({backgroundPosition: ''+iconPossArray[0]+' -100px'});
	}
	$("#nav ."+$(this).attr('class').split(' ')[0]).addClass('current_page_item');
}
function iconOff(){
	
	iconSelector.stop();
	iconPossArray[1] = '0px';
	
	if(iconSelector.hasClass('single_state')){
	iconSelector.css({backgroundPosition: ''+iconPossArray[0]+' '+iconPossArray[1]});
	}
	if(!$(this).hasClass('click')){
	$("#nav ."+$(this).attr('class').split(' ')[0]).removeClass('current_page_item');
	}
	
}
		
$('li').click(function(){
					  $('.click').removeClass('click'); 
					  var tempClass = $(this).attr('class').split(' ')[0]
					  $('li.'+tempClass+'').addClass('click');
					  $('.current_page_item').removeClass('current_page_item');
					  $('li.'+tempClass+'').addClass('current_page_item');
					
					  if($(this).hasClass('home')){
						  homePage();
					  }
					  if($(this).hasClass('contact')){
						  contactPage();
					   }
					  if($(this).hasClass('portfolio')){
						portfolioPage()  
					  }
					  
					   if($(this).hasClass('about')){
						aboutPage() 
					  }
					  
					  
  
					  return false;})
		   });

function contactPage(){
clearState();
singlePage();
$('#small-slider-wrapper').css({'opacity':'0'})
$('#small-slider-wrapper').css({'display':'none'});
$('.contact.gadget').show();
$('.contact.page-text').show();
}

function portfolioPage(){
clearState();
singlePage();
$('#small-slider-wrapper').animate({'opacity':'1'});
$('#small-slider-wrapper').animate({'width':'400px','height':'264px'});
$('#small-slider-wrapper').css({'display':'block'});

$('.portfolio.gadget').show();
$('.portfolio.page-text').show();
}

function aboutPage(){
clearState();
singlePage();
$('#small-slider-wrapper').css({'opacity':'0'})
$('#small-slider-wrapper').css({'display':'none'});

$('.about.gadget').show();
$('.about.page-text').show();
}

function singlePage(){
$("#nav-icon a").addClass("single_state");
//$('#small-slider-wrapper').animate({'opacity':'1'});
//$('#small-slider-wrapper').animate({'width':'400px','height':'264px'});
$('#blog-text').css({backgroundPosition:'-400px -300px'});
$('#text-container').css({'display':'block','opacity':'0'});
$('#right-container').css({'display':'block','opacity':'0'});

$('#slider-content').animate({'top':'250px','right':'0px'});
//$('#green-content').animate({'opacity':'0'});
$('#green-shadow').animate({'top':'-300'},300,function(){
	$('#text-container').animate({'opacity':'1'},300);
	$('#right-container').animate({'opacity':'1'},300);
	//$('#right-container').css({'opacity':'1'});
 });
//$('#name-y').animate({'opacity':'0'});
$('#name-y').animate({backgroundPosition:"(-20px 0px)"},{duration:200});
//$('#name-x').animate({'top':'50px','right':'58px'});
$('#blog-logo').animate(
	 		{backgroundPosition:"(-600 -50px)"}, 
			{duration:500});

$('#green-extras-bg').animate({'right':'50%'});
$('#bg-container').animate(
			{backgroundPosition:"(60px 0px)"}, 
			{duration:500});

//$('#nav-icon').animate({'top':'-100'});
$('#nav-icon').css({'top':'-100px'});
$('#top-container').animate({'top':'-100'});
$('#logo').animate({'top':'130px'});

//Advanced bacroundanimation

	resetIcons(0, true);
}

function resetIcons(possTo, animate){
	$('#nav-icon a').each(function(index) {
	var possArray = $(this).css('backgroundPosition').split(' ');
	if(animate){
	$(this).animate(
			//{backgroundPosition:"("+possArray[0]+" "+(parseInt(possArray[1])+100)+"px)"}, 
			{backgroundPosition:"("+possArray[0]+" "+(possTo)+"px)"}, 
			{duration:500});
	}else{
	$(this).css({backgroundPosition:""+possArray[0]+" "+(possTo)+"px"});	
	}
  });
}


function homePage(){
resSetter();
$('#text-container').css({'display':'none'});
$('#right-container').css({'display':'none'});

 $("#nav-icon a").removeClass("single_state");
  $('#small-slider-wrapper').css({'display':'block'});
 $('#small-slider-wrapper').animate({'opacity':'1'});
 $('#green-content').animate({'opacity':'1'});
$('#blog-text').css({backgroundPosition:'-400px -350px'});
$('#slider-content').animate({'top':'122px','right':'60px'});
$('#green-shadow').animate({'top':'0px'});
$('#blog-logo').animate(
			{backgroundPosition:"(-600px 0px)"}, 
			{duration:500});
$('#green-extras-bg').animate({'right':'57%'});
$('#bg-container').animate(
			{backgroundPosition:"(20px 0px)"}, 
			{duration:500});


$('#nav-icon').animate({'top':'0px'});
$('#top-container').animate({'top':'0px'});
$('#logo').animate({'top':'0px'},400,function(){
 //$('#name-y').animate({'opacity':'1'});
$('#name-y').animate({backgroundPosition:"(0px 0px)"},300,function(){
resetIcons(-100, false);
});	  
											  });
//$('#name-x').animate({'top':'60px','right':'3px'});


//Advanced bacroundanimation
resetIcons(-100, false);
}

function clearState(){
$('.gadget').hide();
$('.page-text').hide();
$('.page_component').animate({'opacity':'1'},500,function(){
$('.page_component').css({'display':'none'}); 
														  });
}